using CodeSharing.Core.Helpers;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.Utilities.Helpers;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class PostRepository : GenericRepository<ApplicationDbContext>, IPostRepository
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IStorageService _storageService;
    private readonly UserManager<CdsUser> _userManager;
    private readonly IUploadRepository _uploadRepository;
    private readonly ILogger<PostRepository> _logger;

    public PostRepository(ApplicationDbContext context, IHttpContextAccessor httpContextAccessor, IStorageService storageService, UserManager<CdsUser> userManager, IUploadRepository uploadRepository, ILogger<PostRepository> logger) : base(context)
    {
        _httpContextAccessor = httpContextAccessor;
        _storageService = storageService;
        _userManager = userManager;
        _uploadRepository = uploadRepository;
        _logger = logger;
    }

    #region Posts

    public async Task<List<PostQuickVm>> GetPosts()
    {
        try
        {
            var posts = from p in _context.CdsPosts
                join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage,
                NumberOfComments = x.p.NumberOfComments,
                NumberOfVotes = x.p.NumberOfVotes,
                ViewCount = x.p.ViewCount,
                CreateDate = x.p.CreateDate,
                LastModifiedDate = x.p.LastModifiedDate
            }).ToListAsync();

            return items;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<PostQuickVm>();
        }
    }

    public async Task<List<PostQuickVm>> GetLatestPosts(int take)
    {
        var posts = from p in _context.CdsPosts
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();
        
        return items;
    }

    public async Task<List<PostQuickVm>> GetPopularPosts(int take)
    {
        var posts = from p in _context.CdsPosts
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();
        
        return items;
    }

    public async Task<List<PostQuickVm>> GetTrendingPosts(int take)
    {
        var posts = from p in _context.CdsPosts
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
            }).ToListAsync();
        
        return items;
    }

    public async Task<PostVm?> GetById(int id)
    {
        var post = await _context.CdsPosts.FindAsync(id);
        if (post == null) 
            return null;

        var category = _context.CdsCategories.FirstOrDefault(x => x.Id == post.CategoryId);
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
            CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + post.CoverImage
        };

        return items;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var query = from p in _context.CdsPosts
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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
        var query = from p in _context.CdsPosts
            join lip in _context.CdsLabelInPosts on p.Id equals lip.PostId
            join l in _context.CdsLabels on lip.LabelId equals l.Id
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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
        var query = from c in _context.CdsCategories
            join p in _context.CdsPosts on c.Id equals p.CategoryId
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
        var query = from p in _context.CdsPosts
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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
        var query = from p in _context.CdsPosts
            join c in _context.CdsCategories on p.CategoryId equals c.Id
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
                CoverImage = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.p.CoverImage
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

    public async Task<bool> Post(CdsPost post)
    {
        _context.CdsPosts.Add(post);
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }
    
    public async Task<bool> Put(int id, PostCreateRequest request)
    {
        var post = await _context.CdsPosts.FindAsync(id);
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
            var coverImagePath = await _uploadRepository.SaveFile(request.CoverImage);
            post.CoverImage = coverImagePath;
        }
        
        // Process label
        if (request.Labels.Length > 0) 
            await ProcessLabel(request, post);
        
        // Update post
        _context.CdsPosts.Update(post);
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<bool> Delete(int id)
    {
        var post = await _context.CdsPosts.FindAsync(id);
        if (post == null)
            return false;

        _context.CdsPosts.Remove(post);
        
        // Remove comments related post
        var comments = await _context.CdsComments.Where(x => x.PostId == id).ToListAsync();
        foreach (var comment in comments)
        {
            _context.CdsComments.Remove(comment);
        }
        
        // Remove label in post
        var labelInPosts = await _context.CdsLabelInPosts.Where(x => x.PostId == id).ToListAsync();
        foreach (var labelInPost in labelInPosts)
        {
            _context.CdsLabelInPosts.Remove(labelInPost);
        }
        
        // Remove vote
        var vote = _context.CdsVotes.FirstOrDefault(x => x.PostId == id);
        if (vote != null)
        {
            _context.CdsVotes.Remove(vote);
        }
        
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<bool> UpdateViewCount(int id)
    {
        var post = await _context.CdsPosts.FindAsync(id);
        if (post == null)
            return false;

        if (post.ViewCount == null) 
            post.ViewCount = 0;

        post.ViewCount += 1;

        _context.CdsPosts.Update(post);
        
        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    #endregion Posts

    #region Votes

    public async Task<List<VoteVm>> GetVotes(int postId)
    {
        var votes = await _context.CdsVotes
            .Where(x => x.PostId == postId)
            .Select(x => new VoteVm
            {
                PostId = x.PostId,
                UserId = x.UserId,
                CreateDate = x.CreateDate,
                LastModifiedDate = x.LastModifiedDate
            }).ToListAsync();

        return votes;
    }

    public async Task<int> PostVote(int postId, string userId)
    {
        // Find value of post
        var post = await _context.CdsPosts.FindAsync(postId);
        if (post == null)
            return 0;

        // Get number of votes in current post
        var numberOfVotes = await _context.CdsVotes.CountAsync(x => x.PostId == postId);

        // Find postId in votes table
        var vote = await _context.CdsVotes.FindAsync(postId, userId);

        // Remove votes
        if (vote != null)
        {
            _context.CdsVotes.Remove(vote);
            numberOfVotes -= 1;
        }
        else
        {
            vote = new CdsVote
            {
                PostId = postId,
                UserId = userId
            };

            _context.CdsVotes.Add(vote);
            numberOfVotes += 1;
        }
        
        // Update number of votes in user
        var user = await _userManager.FindByIdAsync(userId);
        if (user != null)
        {
            user.NumberOfVotes = numberOfVotes;
            await _userManager.UpdateAsync(user);
        }

        post.NumberOfVotes = numberOfVotes;
        _context.CdsPosts.Update(post);

        var result = await _context.SaveChangesAsync();
        return result > 0 ? numberOfVotes : 0;
    }

    public async Task<bool> DeleteVote(int postId, string userId)
    {
        var vote = await _context.CdsVotes.FindAsync(postId, userId);
        if (vote == null) 
            return false;

        var post = await _context.CdsPosts.FindAsync(postId);
        if (post == null)
            return false;

        post.NumberOfVotes = post.NumberOfVotes.GetValueOrDefault(0) - 1;

        _context.CdsPosts.Update(post);
        _context.CdsVotes.Remove(vote);

        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    #endregion Votes

    #region Report

    public async Task<bool> PostReport(int postId, ReportCreateRequest request, string userId)
    {
        var report = new CdsReport
        {
            Content = request.Content,
            PostId = postId,
            ReportUserId = userId,
            IsProcessed = false
        };

        _context.CdsReports.Add(report);

        var post = await _context.CdsPosts.FindAsync(postId);
        if (post == null)
            return false;

        var user = await _userManager.FindByIdAsync(userId);
        if (user != null)
        {
            var numberOfPosts = user.NumberOfPosts;
            numberOfPosts += 1;
            user.NumberOfReports = numberOfPosts;
            await _userManager.UpdateAsync(user);
        }

        post.NumberOfReports = post.NumberOfReports.GetValueOrDefault(0) + 1;
        _context.CdsPosts.Update(post);

        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    #endregion Report

    #region Comments

    public async Task<List<CommentVm>> GetRecentComments(int take)
    {
        var query = from c in _context.CdsComments
            join u in _context.Users on c.OwnerUserId equals u.Id
            join k in _context.CdsPosts on c.PostId equals k.Id
            orderby c.CreateDate descending
            select new { c, u, k };

        var comments = await query.Take(take).Select(x => new CommentVm
        {
            Id = x.c.Id,
            CreateDate = x.c.CreateDate,
            PostId = x.c.PostId,
            OwnerUserId = x.c.OwnerUserId,
            PostTitle = x.k.Title,
            OwnerName = x.u.FirstName + " " + x.u.LastName,
            PostSlug = x.k.Slug
        }).ToListAsync();

        return comments;
    }

    public async Task<IEnumerable<CommentVm>> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize)
    {
        var query = from c in _context.CdsComments
            join u in _context.Users on c.OwnerUserId equals u.Id
            where c.PostId == postId
            select new { c, u };

        var flatComments = await query.Select(x => new CommentVm
        {
            Id = x.c.Id,
            Content = x.c.Content,
            CreateDate = x.c.CreateDate,
            PostId = x.c.PostId,
            OwnerUserId = x.c.OwnerUserId,
            OwnerName = x.u.FirstName + " " + x.u.LastName,
            ReplyId = x.c.ReplyId
        }).ToListAsync();

        var lookup = flatComments.ToLookup(c => c.ReplyId);
        var rootCategories = flatComments.Where(x => x.ReplyId == null);

        // Only loop through root categories
        foreach (var c in rootCategories)
            // You can skip the check if you want an empty list instead of null
            // when there is no children
            if (lookup.Contains(c.Id))
                c.Children = lookup[c.Id].ToList();

        return rootCategories;
    }

    public async Task<List<CommentVm>> GetCommentsByPostId(int postId)
    {
        var query = from p in _context.CdsPosts
            join c in _context.CdsComments on p.Id equals c.PostId
            join u in _context.Users on c.OwnerUserId equals u.Id
            where c.PostId == postId
            select new { p, c, u };

        var comments = await query.Select(x => new CommentVm
        {
            Id = x.c.Id,
            Content = x.c.Content,
            CreateDate = x.c.CreateDate,
            PostId = x.c.PostId,
            OwnerUserId = x.c.OwnerUserId,
            OwnerName = x.u.FirstName + " " + x.u.LastName,
            ReplyId = x.c.ReplyId
        }).ToListAsync();

        return comments;
    }

    public async Task<CommentVm?> GetCommentDetail(int commentId)
    {
        var comment = await _context.CdsComments.FindAsync(commentId);
        if (comment == null)
            return null;

        var user = await _context.Users.FindAsync(comment.OwnerUserId);
        var commentVm = new CommentVm
        {
            Id = comment.Id,
            Content = comment.Content,
            CreateDate = comment.CreateDate,
            PostId = comment.PostId,
            LastModifiedDate = comment.LastModifiedDate,
            OwnerUserId = comment.OwnerUserId,
            OwnerName = user?.FirstName + " " + user?.LastName
        };

        return commentVm;
    }

    public async Task<List<CommentVm>> GetComments()
    {
        var query = from p in _context.CdsPosts
            join c in _context.CdsComments on p.Id equals c.PostId
            join u in _context.Users on c.OwnerUserId equals u.Id
            select new { p, c, u };

        var items = await query.Select(x => new CommentVm
        {
            Id = x.c.Id,
            Content = x.c.Content,
            CreateDate = x.c.CreateDate,
            PostId = x.c.PostId,
            PostTitle = x.p.Title,
            OwnerUserId = x.c.OwnerUserId,
            OwnerName = x.u.FirstName + " " + x.u.LastName,
            ReplyId = x.c.ReplyId
        }).ToListAsync();

        return items;
    }

    public async Task<bool> PostComment(int postId, CommentCreateRequest request, string userId)
    {
        var comment = new CdsComment
        {
            Content = request.Content,
            PostId = postId,
            OwnerUserId = userId,
            ReplyId = request.ReplyId
        };
        _context.CdsComments.Add(comment);

        var post = await _context.CdsPosts.FindAsync(postId);
        if (post == null)
            return false;

        post.NumberOfComments = post.NumberOfComments.GetValueOrDefault(0) + 1;
        _context.CdsPosts.Update(post);

        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<bool> PutComment(int commentId, CommentCreateRequest request, string userId)
    {
        var comment = await _context.CdsComments.FindAsync(commentId);
        if (comment == null) 
            return false;

        if (comment.OwnerUserId != userId) 
            return false;

        comment.Content = request.Content;
        _context.CdsComments.Update(comment);

        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<bool> DeleteComment(int postId, int commentId)
    {
        var comment = await _context.CdsComments.FindAsync(commentId);
        if (comment == null) 
            return false;

        _context.CdsComments.Remove(comment);

        var post = await _context.CdsPosts.FindAsync(postId);
        if (post == null)
            return false;

        post.NumberOfComments = post.NumberOfVotes.GetValueOrDefault(0) - 1;
        _context.CdsPosts.Update(post);

        var result = await _context.SaveChangesAsync();
        return result > 0;
    }

    #endregion Comments
    
    #region Helpers
    
    public async Task ProcessLabel(PostCreateRequest request, CdsPost post)
    {
        foreach (var labelText in request.Labels)
        {
            var labelId = TextHelper.ToUnsignString(labelText);
            var existingLabel = await _context.CdsLabels.FindAsync(labelId);
            if (existingLabel == null)
            {
                var labelEntity = new CdsLabel
                {
                    Id = labelId,
                    Name = labelText
                };
                _context.CdsLabels.Add(labelEntity);
            }

            if (await _context.CdsLabelInPosts.FindAsync(labelId, post.Id) == null)
                _context.CdsLabelInPosts.Add(new CdsLabelInPost
                {
                    PostId = post.Id,
                    LabelId = labelId
                });
        }
    }
    #endregion
}