using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;
using CodeSharing.Server.Services.Interfaces;

namespace CodeSharing.Server.Controllers;

public class PostsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<PostsController> _logger;
    private readonly ISequenceService _sequenceService;
    
    public PostsController(
        ApplicationDbContext context, 
        ILogger<PostsController> logger, 
        ISequenceService sequenceService)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _sequenceService = sequenceService;
    }
    
    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetPosts()
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            orderby p.CreateDate descending
            select new { p, c };
        
        var items = await posts.Select(u => new PostQuickVm()
        {
            Id = u.p.Id,
            CategoryId = u.c.Id,
            CategoryTitle = u.c.Title,
            Slug = u.p.Slug,
            Title = u.p.Title,
            Content = u.p.Content,
            CoverImage = AmazonS3Helper.GetPresignedUrl(u.p.CoverImage, 1440)
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get posts request");
        return Ok(items);
    }

    [AllowAnonymous]
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
            CreateDate = x.p.CreateDate,
            CoverImage = AmazonS3Helper.GetPresignedUrl(x.p.CoverImage, 1440)
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get latest posts request");
        return Ok(items);
    }
    
    [AllowAnonymous]
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
                CreateDate = x.p.CreateDate,
                CoverImage = AmazonS3Helper.GetPresignedUrl(x.p.CoverImage, 1440)
            }).ToListAsync();

        _logger.LogInformation("Successful execution of get popular posts request");
        return Ok(items);
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found post item for id = {id} in database"));
        }

        var category = _context.Categories.FirstOrDefault(x => x.Id == post.CategoryId);
        if (category == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found category item for id = {id} in database"));
        }
        
        var attachments = await _context.Attachments
            .Where(x => x.PostId == id)
            .Select(x => new AttachmentVm()
            {
                FileName = x.FileName,
                FilePath = x.FilePath,
                FileSize = x.FileSize,
                Id = x.Id,
                FileType = x.FileType
            }).ToListAsync();

        var items = InitPostVm(post);
        items.Attachments = attachments;

        _logger.LogInformation("Successful execution of get post by id request");
        return Ok(items);
    }

    [AllowAnonymous]
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
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = AmazonS3Helper.GetPresignedUrl(x.p.CoverImage, 1440)
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        _logger.LogInformation("Successful execution of get posts by category id request");
        return Ok(pagination);
    }

    [AllowAnonymous]
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
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = AmazonS3Helper.GetPresignedUrl(x.p.CoverImage, 1440)
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>()
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        _logger.LogInformation("Successful execution of get posts by tag id request");
        return Ok(pagination);
    }

    [AllowAnonymous]
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

        _logger.LogInformation("Successful execution of get total post in category request");
        return Ok(items);
    }
    
    [AllowAnonymous]
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
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = AmazonS3Helper.GetPresignedUrl(x.p.CoverImage, 1440)
            })
            .ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords,
        };
        
        _logger.LogInformation("Successful execution of get posts in paging have filter request");
        return Ok(pagination);
    }
    
    [AllowAnonymous]
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
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = AmazonS3Helper.GetPresignedUrl(x.p.CoverImage, 1440)
            })
            .ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords,
        };
        
        _logger.LogInformation("Successful execution of get posts in paging no filter request");
        return Ok(pagination);
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> Post([FromForm] PostCreateRequest request)
    {
        var post = new Post()
        {
            CategoryId = request.CategoryId,
            Title = request.Title,
            Content = request.Content,
            Slug = request.Slug,
            Note = request.Note
        };

        if (request.Labels.Length > 0)
        {
            post.Labels = string.Join(',', request.Labels);
        }
        
        // Process Owner User Id
        post.OwnerUserId = User.GetUserId();
        
        // Id (using Sequence)
        post.Id = await _sequenceService.GetPostNewId();
    
        // Process label
        if (request.Labels?.Length > 0)
        {
            await ProcessLabel(request, post);
        }
        // Process Cover Image
        var fileName = request.CoverImage.FileName;
        var imageBase64 = FunctionBase.ConvertToBase64(request.CoverImage);
        AmazonS3Helper.UploadImage(fileName, imageBase64, out var coverImageUrl);
        
        post.CoverImage = coverImageUrl;
        
        _context.Posts.Add(post);
        
        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return CreatedAtAction(nameof(GetById), new { id = post.Id });
        }

        return BadRequest(new ApiBadRequestResponse("Insert post failed"));
    }
   
    #region Helpers
    
    private static PostVm InitPostVm(Post post)
    {
        return new PostVm()
        {
            Id = post.Id,
            CategoryId = post.CategoryId,
            Title = post.Title,
            Content = post.Content,
            Slug = post.Slug,
            Note = post.Note,
            OwnerUserId = post.OwnerUserId,
            Labels = !string.IsNullOrEmpty(post.Labels) ? post.Labels.Split(',') : null,
            CreateDate = post.CreateDate,
            LastModifiedDate = post.LastModifiedDate,
            NumberOfComments = post.NumberOfComments,
            NumberOfVotes = post.NumberOfVotes,
            NumberOfReports = post.NumberOfReports,
            CoverImage = AmazonS3Helper.GetPresignedUrl(post.CoverImage, 1440)
        };
    }

    private async Task ProcessLabel(PostCreateRequest request, Post post)
    {
        foreach (var labelText in request.Labels)
        {
            var labelId = TextHelper.ToUnsignString(labelText);
            var existingLabel = await _context.Labels.FindAsync(labelId);
            if (existingLabel == null)
            {
                var labelEntity = new Label()
                {
                    Id = labelId,
                    Name = labelText
                };
                _context.Labels.Add(labelEntity);
            }
            if (await _context.LabelInPosts.FindAsync(labelId, post.Id) == null)
            {
                _context.LabelInPosts.Add(new LabelInPost()
                {
                    PostId = post.Id,
                    LabelId = labelId
                });
            }
        }
    }

    #endregion Helpers
}