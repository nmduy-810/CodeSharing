using System.Net.Http.Headers;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CodeSharing.Server.Services.Interfaces;

namespace CodeSharing.Server.Controllers;

public class PostsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<PostsController> _logger;
    private readonly ISequenceService _sequenceService;
    private readonly IStorageService _storageService;
    private readonly IHttpContextAccessor _httpContextAccessor;
    
    public PostsController(
        ApplicationDbContext context, 
        ILogger<PostsController> logger, 
        ISequenceService sequenceService,
        IStorageService storageService,
        IHttpContextAccessor httpContextAccessor)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _sequenceService = sequenceService;
        _storageService = storageService;
        _httpContextAccessor = httpContextAccessor;
    }
    
    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetPosts()
    {
        var posts = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.CreateDate descending
            select new { p, c, u };
        
        var items = await posts.Select(x => new PostQuickVm()
        {
            Id = x.p.Id,
            CategoryId = x.c.Id,
            CategoryTitle = x.c.Title,
            FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
            Slug = x.p.Slug,
            Title = x.p.Title,
            Content = x.p.Content,
            CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.CreateDate descending
            select new { p, c, u };

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
            FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
            NumberOfVotes = x.p.NumberOfVotes,
            CreateDate = x.p.CreateDate,
            CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();

        _logger.LogInformation("Successful execution of get popular posts request");
        return Ok(items);
    }

    [AllowAnonymous]
    [HttpGet("{id}")]
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

        var fullName = _context.Users.FirstOrDefault(x => x.Id == post.OwnerUserId);
        if (fullName == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found full name for id = {id} in database"));
        }

        var items = new PostVm
        {
            Id = post.Id,
            CategoryId = post.CategoryId,
            CategorySlug = category.Slug,
            CategoryTitle = category.Title,
            FullName = string.Concat(fullName.FirstName, " ", fullName.LastName),
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
            CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + post.CoverImage
        };

        _logger.LogInformation("Successful execution of get post by id request");
        return Ok(items);
    }

    [AllowAnonymous]
    [HttpGet("category/{categoryId:int}")]
    public async Task<IActionResult> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var query = from p in _context.Posts
            join c in _context.Categories on p.CategoryId equals c.Id
            join u in _context.Users on p.OwnerUserId equals u.Id
            select new { p, c, u };
        
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
            join u in _context.Users on p.OwnerUserId equals u.Id
            where lip.LabelId == tagId
            select new { p, l, c, u };

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
                FullName = string.Concat(x.u.FirstName, " ", x.u.LastName),
                NumberOfVotes = x.p.NumberOfVotes,
                CreateDate = x.p.CreateDate,
                NumberOfComments = x.p.NumberOfComments,
                CoverImage = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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
            join u in _context.Users on p.OwnerUserId equals u.Id
            select new { p, c, u };
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
            join u in _context.Users on p.OwnerUserId equals u.Id
            orderby p.CreateDate descending
            select new { p, c, u };

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
            request.Labels = request.Labels[0].Split("#").Select(x => x.Trim())
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .ToArray();

            post.Labels = string.Join(',', request.Labels);
            post.Labels = post.Labels.Trim().TrimStart(',');
        }
        
        // Process Slug
        if (string.IsNullOrEmpty(post.Slug))
        {
            post.Slug = TextHelper.ToUnsignString(post.Title);
        }
        
        // Process Owner User Id
        post.OwnerUserId = User.GetUserId();
        
        // Id (using Sequence)
        post.Id = await _sequenceService.GetPostNewId();
    
        // Process label
        if (request.Labels.Length > 0)
        {
            await ProcessLabel(request, post);
        }
        // Process Cover Image
        if (request.CoverImage != null)
        {
            var coverImagePath = await SaveFile(request.CoverImage);
            post.CoverImage = coverImagePath;
        }
        
        _context.Posts.Add(post);
        
        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return CreatedAtAction(nameof(GetById), new { id = post.Id });
        }

        return BadRequest(new ApiBadRequestResponse("Insert post failed"));
    }

    [HttpPut("{id}")]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> Put(int id, [FromForm] PostCreateRequest request)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found post item for id = {id} in database"));
        }
        
        // Set post with new data
        post.CategoryId = request.CategoryId;
        post.Title = request.Title;
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
        {
            await ProcessLabel(request, post);
        }

        // Update post
        _context.Posts.Update(post);
        
        var result = await _context.SaveChangesAsync();

        if (result > 0)
        {
            return NoContent();
        }
        return BadRequest(new ApiBadRequestResponse($"Update post failed"));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found post item for id = {id} in database"));
        }

        _context.Posts.Remove(post);
        var result = await _context.SaveChangesAsync();
        if (result <= 0) 
            return BadRequest(new ApiBadRequestResponse("Delete post failed"));
        
        var postVm = new PostVm()
        {
            Id = post.Id,
            CategoryId = post.CategoryId,
            Title = post.Title,
            CoverImage = post.CoverImage,
            Content = post.Content,
            Slug = post.Slug,
            Note = post.Note,
            OwnerUserId = post.OwnerUserId,
            Labels = !string.IsNullOrEmpty(post.Labels) ? post.Labels.Split(',') : null,
            CreateDate = post.CreateDate,
            LastModifiedDate = post.LastModifiedDate,
            NumberOfComments = post.NumberOfComments,
            NumberOfVotes = post.NumberOfVotes,
            NumberOfReports = post.NumberOfReports
        };
        return Ok(postVm);
    }

    #region Helpers

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
    
    private async Task<string> SaveFile(IFormFile file)
    {
        var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName?.Trim('"');
        var fileName = FunctionBase.GenerateFileName("Image") + Path.GetExtension(originalFileName);
        await _storageService.SaveFileAsync(file.OpenReadStream(), fileName);
        var filePath = _storageService.GetFileUrl(fileName);
        return filePath;
    }

    #endregion Helpers
}