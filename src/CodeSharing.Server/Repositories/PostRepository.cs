using System.Net.Http.Headers;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Post;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class PostRepository : GenericRepository<ApplicationDbContext>, IPostRepository
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IStorageService _storageService;
    public PostRepository(ApplicationDbContext context, IHttpContextAccessor httpContextAccessor, IStorageService storageService) : base(context)
    {
        _httpContextAccessor = httpContextAccessor;
        _storageService = storageService;
    }

    public async Task<List<PostQuickVm>> GetPosts()
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.CreateDate descending
            select new { p, c, u };

        var items = await posts.Select(x => new PostQuickVm
        {
            Id = x.p.Id,
            CategoryId = x.c.Id,
            CategoryTitle = x.c.Title,
            FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
            Slug = x.p.Slug,
            Title = x.p.Title,
            Summary = x.p.Summary,
            Content = x.p.Content,
            CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage,
            NumberOfComments = x.p.NumberOfComments,
            NumberOfVotes = x.p.NumberOfVotes,
            ViewCount = x.p.ViewCount,
            CreateDate = x.p.CreateDate,
            LastModifiedDate = x.p.LastModifiedDate
        }).ToListAsync();

        return items;
    }

    public async Task<List<PostQuickVm>> GetLatestPosts(int take)
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.CreateDate descending
            select new { p, c, u };

        var items = await posts
            .Take(take)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();
        
        return items;
    }

    public async Task<List<PostQuickVm>> GetPopularPosts(int take)
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.ViewCount descending
            select new { p, c, u };

        var items = await posts.Take(take)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();
        
        return items;
    }

    public async Task<List<PostQuickVm>> GetTrendingPosts(int take)
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.NumberOfVotes descending
            select new { p, c, u };

        var items = await posts.Take(take)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();
        
        return items;
    }

    public async Task<PostVm?> GetById(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null) 
            return null;

        var category = _context.Categories.FirstOrDefault(x => x.Id == post.CategoryId);
        if (category == null)
            return null;

        var fullName = _context.Users.FirstOrDefault(x => x.Id == post.OwnerUserId);
        if (fullName == null)
            return null;

        var items = new PostVm
        {
            Id = post.Id,
            CategoryId = post.CategoryId,
            CategorySlug = category.Slug,
            CategoryTitle = category.Title,
            FullName = string.Concat(fullName.FirstName, " ", fullName.LastName),
            Title = post.Title,
            Summary = post.Summary,
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
            ViewCount = post.ViewCount,
            CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + post.CoverImage
        };

        return items;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            select new { p, c, u };

        // Get all post by category Id
        if (categoryId.HasValue) 
            query = query.Where(x => x.p.CategoryId == categoryId.Value);

        var totalRecords = await query.CountAsync();
        var items = await query
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        return pagination;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join lip in _context.LabelInPosts on p.Id equals lip.PostId
            join l in _context.Labels on lip.LabelId equals l.Id
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            where lip.LabelId == tagId
            select new { p, l, c, u };

        var totalRecords = await query.CountAsync();

        var items = await query
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        return pagination;
    }

    public async Task<List<PostQuickVm>> GetTotalPostInCategory()
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

        var items = await query.Select(x => new PostQuickVm
        {
            Id = x.Id,
            Title = x.Title,
            Slug = x.Slug,
            TotalPost = x.Count
        }).ToListAsync();

        return items;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            select new { p, c, u };
        if (!string.IsNullOrEmpty(filter)) query = query.Where(x => x.p.Title.Contains(filter));
        if (categoryId.HasValue) query = query.Where(x => x.p.CategoryId == categoryId.Value);
        var totalRecords = await query.CountAsync();
        var items = await query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            })
            .ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        return pagination;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsPaging(int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.CreateDate descending
            select new { p, c, u };

        var totalRecords = await query.CountAsync();
        var items = await query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new PostQuickVm
            {
                Id = x.p.Id,
                CategoryId = x.p.CategoryId,
                Slug = x.p.Slug,
                Title = x.p.Title,
                Summary = x.p.Summary,
                Content = x.p.Content,
                CategorySlug = x.c.Slug,
                CategoryTitle = x.c.Title,
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            })
            .ToListAsync();

        var pagination = new Pagination<PostQuickVm>
        {
            PageSize = pageSize,
            PageIndex = pageIndex,
            Items = items,
            TotalRecords = totalRecords
        };

        return pagination;
    }

    public async Task<bool> Post(Post post)
    {
        _context.Posts.Add(post);
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task ProcessLabel(PostCreateRequest request, Post post)
    {
        foreach (var labelText in request.Labels)
        {
            var labelId = TextHelper.ToUnsignString(labelText);
            var existingLabel = await _context.Labels.FindAsync(labelId);
            if (existingLabel == null)
            {
                var labelEntity = new Label
                {
                    Id = labelId,
                    Name = labelText
                };
                _context.Labels.Add(labelEntity);
            }

            if (await _context.LabelInPosts.FindAsync(labelId, post.Id) == null)
                _context.LabelInPosts.Add(new LabelInPost
                {
                    PostId = post.Id,
                    LabelId = labelId
                });
        }
    }

    public async Task<bool> Put(int id, PostCreateRequest request)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
            return false;
        
        // Set post with new data
        post.CategoryId = request.CategoryId;
        post.Title = request.Title;
        post.Summary = request.Summary;
        post.Slug = string.IsNullOrEmpty(request.Slug) ? TextHelper.ToUnsignString(request.Title) : request.Slug;
        post.Content = request.Content;
        post.Note = request.Note;
        
        // Process labels
        if (request.Labels.Length > 0)
        {
            request.Labels = request.Labels[0].Split("#").Select(x => x.Trim())
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .ToArray();

            post.Labels = string.Join(',', request.Labels);
            post.Labels = post.Labels.Trim().TrimStart(',');
        }
        
        // Process Cover Image
        if (request.CoverImage != null)
        {
            var coverImagePath = await SaveFile(request.CoverImage);
            post.CoverImage = coverImagePath;
        }
        
        // Process label
        if (request.Labels.Length > 0) 
            await ProcessLabel(request, post);
        
        // Update post
        _context.Posts.Update(post);
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<bool> Delete(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
            return false;

        _context.Posts.Remove(post);
        
        // Remove comments related post
        var comments = await _context.Comments.Where(x => x.PostId == id).ToListAsync();
        foreach (var comment in comments)
        {
            _context.Comments.Remove(comment);
        }
        
        // Remove label in post
        var labelInPosts = await _context.LabelInPosts.Where(x => x.PostId == id).ToListAsync();
        foreach (var labelInPost in labelInPosts)
        {
            _context.LabelInPosts.Remove(labelInPost);
        }
        
        // Remove vote
        var vote = _context.Votes.FirstOrDefault(x => x.PostId == id);
        if (vote != null)
        {
            _context.Votes.Remove(vote);
        }
        
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<bool> UpdateViewCount(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
            return false;

        if (post.ViewCount == null) 
            post.ViewCount = 0;

        post.ViewCount += 1;

        _context.Posts.Update(post);
        
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    #region Helpers

    private async Task<string> SaveFile(IFormFile file)
    {
        var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName?.Trim('"');
        var fileName = FunctionBase.GenerateFileName("Image") + Path.GetExtension(originalFileName);
        await _storageService.SaveFileAsync(file.OpenReadStream(), fileName);
        var filePath = _storageService.GetFileUrl(fileName);
        return filePath;
    }

    #endregion
}