using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class PostsController : BaseController
{
    private readonly ApplicationDbContext _context;

    public PostsController(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetKnowledgeBases()
    {
        var items = await _context.Posts.Select(u => new PostQuickVm()
        {
            Id = u.Id,
            CategoryId = u.CategoryId,
            Slug = u.Slug,
            Title = u.Title,
            Content = u.Content,
        }).ToListAsync();

        return Ok(items);
    }

    [HttpGet("latest/{take:int}")]
    public async Task<IActionResult> GetLatestPosts(int take)
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            orderby p.CreateDate descending
            select new { p, c };

        var items = await posts
            .Take(take)
            .Select(x => new PostQuickVm()
        {
            Id = x.p.Id,
            CategoryId = x.p.CategoryId,
            Slug = x.p.Slug,
            Title = x.p.Title,
            Content = x.p.Content,
            CategorySlug = x.c.Slug,
            CategoryTitle = x.c.Title,
            NumberOfVotes = x.p.NumberOfVotes,
            CreateDate = x.p.CreateDate
        }).ToListAsync();

        return Ok(items);
    }
    
    [HttpGet("popular/{take:int}")]
    public async Task<IActionResult> GetPopularPosts(int take)
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            orderby p.ViewCount descending
            select new { p, c };

        var items = await posts.Take(take)
            .Select(x => new PostQuickVm()
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate
            }).ToListAsync();

        return Ok(items);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
        {
            return NotFound();
        }

        var category = _context.Categories.FirstOrDefault(x => x.Id == post.CategoryId);

        if (category == null) 
            return NotFound();
        
        var items = new PostVm()
        {
            Id = post.Id,
            CategoryId = post.CategoryId,
            CategoryTitle = category.Title,
            Title = post.Title,
            Content = post.Content,
            Slug = post.Slug,
            Note = post.Note,
            Labels = !string.IsNullOrEmpty(post.Labels) ? post.Labels.Split(',') : null,
            CreateDate = post.CreateDate,
            LastModifiedDate = post.LastModifiedDate,
            NumberOfComments = post.NumberOfComments,
            NumberOfVotes = post.NumberOfVotes,
            NumberOfReports = post.NumberOfReports
        };

        return Ok(items);
    }

    [HttpGet("category/{categoryId:int}")]
    public async Task<IActionResult> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories
                on p.CategoryId equals c.Id
            select new { p, c };
        
        // Get all post by category Id
        if (categoryId.HasValue)
        {
            query = query.Where(x => x.p.CategoryId == categoryId.Value);
        }

        var totalRecords = await query.CountAsync();
        var items = await query
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm()
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        return Ok(pagination);
    }

    [HttpGet("tags/{tagId}")]
    public async Task<IActionResult> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join lip in _context.LabelInPosts on p.Id equals lip.PostId
            join l in _context.Labels on lip.LabelId equals l.Id
            join c in _context.Categories on p.CategoryId equals c.Id
            where lip.LabelId == tagId
            select new { p, l, c };

        var totalRecords = await query.CountAsync();

        var items = await query
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm()
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>()
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        return Ok(pagination);
    }

    [HttpGet("total-post")]
    public async Task<IActionResult> GetTotalPostInCategory()
    {
        var query = from c in _context.Categories
            join p in _context.Posts on c.Id equals p.CategoryId
            group new { c.Id, c.Title, c.Slug } by new { c.Id, c.Title, c.Slug }
            into g
            select new
            {
                g.Key.Id,
                g.Key.Title,
                g.Key.Slug,
                Count = g.Count()
            };
        
        var items = await query.Select(x => new PostQuickVm()
        {
            Id = x.Id,
            Title = x.Title,
            Slug = x.Slug,
            TotalPost = x.Count
        }).ToListAsync();

        return Ok(items);
    }
    
    [HttpGet("filter")]
    public async Task<IActionResult> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            select new { p, c };
        if (!string.IsNullOrEmpty(filter))
        {
            query = query.Where(x => x.p.Title.Contains(filter));
        }
        if (categoryId.HasValue)
        {
            query = query.Where(x => x.p.CategoryId == categoryId.Value);
        }
        var totalRecords = await query.CountAsync();
        var items = await query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm()
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments
            })
            .ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords,
        };
        return Ok(pagination);
    }
    
    [HttpGet("paging")]
    public async Task<IActionResult> GetPostsPaging(int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            orderby p.CreateDate descending
            select new { p, c };
        
        var totalRecords = await query.CountAsync();
        var items = await query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm()
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments
            })
            .ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords,
        };
        return Ok(pagination);
    }
}