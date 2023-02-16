using System.Net.Http.Headers;
using CodeSharing.Core.Helpers;
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Services;

public class PostService : IPostService
{
    private readonly IPostRepository _repository;
    private readonly ICacheService _distributedCacheService;
    private readonly ISequenceService _sequenceService;
    private readonly IStorageService _storageService;
    private readonly UserManager<CdsUser> _userManager;

    public PostService(IPostRepository repository, ICacheService distributedCacheService, ISequenceService sequenceService, IStorageService storageService, UserManager<CdsUser> userManager)
    {
        _repository = repository;
        _distributedCacheService = distributedCacheService;
        _sequenceService = sequenceService;
        _storageService = storageService;
        _userManager = userManager;
    }

    public async Task<Result<List<PostQuickVm>>> GetPosts()
    {
        var result = new Result<List<PostQuickVm>>();
        try
        {
            var data = await _repository.GetPosts();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<PostQuickVm>>> GetLatestPosts(int take)
    {
        var result = new Result<List<PostQuickVm>>();
        try
        {
            var cacheData = await _distributedCacheService.GetAsync<List<PostQuickVm>>(CacheConstant.LatestPosts);
            if (cacheData != null)
            {
                result.SetResult(cacheData);
                return result;
            }
        
            var data = await _repository.GetLatestPosts(take);
            await _distributedCacheService.SetAsync(CacheConstant.LatestPosts, result, 2);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<PostQuickVm>>> GetPopularPosts(int take)
    {
        var result = new Result<List<PostQuickVm>>();
        try
        {
            var cacheData = await _distributedCacheService.GetAsync<List<PostQuickVm>>(CacheConstant.PopularPosts);
            if (cacheData != null)
            {
                result.SetResult(cacheData);
                return result;
            }
        
            var data = await _repository.GetPopularPosts(take);
            await _distributedCacheService.SetAsync(CacheConstant.PopularPosts, result, 2);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<PostQuickVm>>> GetTrendingPosts(int take)
    {
        var result = new Result<List<PostQuickVm>>();
        try
        {
            var cacheData = await _distributedCacheService.GetAsync<List<PostQuickVm>>(CacheConstant.TrendingPosts);
            if (cacheData != null)
            {
                result.SetResult(cacheData);
                return result;
            }
        
            var data = await _repository.GetTrendingPosts(take);
            await _distributedCacheService.SetAsync(CacheConstant.TrendingPosts, result, 2);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<PostVm?>> GetById(int id)
    {
        var result = new Result<PostVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var result = new Result<Pagination<PostQuickVm>>();
        try
        {
            var data = await _repository.GetPostsByCategoryId(categoryId, pageIndex, pageSize);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        var result = new Result<Pagination<PostQuickVm>>();
        try
        {
            var data = await _repository.GetPostsByTagId(tagId, pageIndex, pageSize);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<PostQuickVm>>> GetTotalPostInCategory()
    {
        var result = new Result<List<PostQuickVm>>();
        try
        {
            var data = await _repository.GetTotalPostInCategory();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize)
    {
        var result = new Result<Pagination<PostQuickVm>>();
        try
        {
            var data = await _repository.GetPostsPaging(filter, categoryId, pageIndex, pageSize);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsPaging(int pageIndex, int pageSize)
    {
        var result = new Result<Pagination<PostQuickVm>>();
        try
        {
            var cacheData = await _distributedCacheService.GetAsync<Pagination<PostQuickVm>>(CacheConstant.PostsPaging);
            if (cacheData != null)
            {
                result.SetResult(cacheData);
                return result;
            }
        
            var data = await _repository.GetPostsPaging(pageIndex, pageSize);
            await _distributedCacheService.SetAsync(CacheConstant.PostsPaging, result, 2);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<bool> Post(PostCreateRequest request, string userId)
    {
        var post = new CdsPost
        {
            CategoryId = request.CategoryId,
            Title = request.Title,
            Summary = request.Summary,
            Content = request.Content,
            Note = request.Note
        };

        if (request.Labels.Length > 0)
        {
            // Remove cached previous save for post
            await _distributedCacheService.RemoveAsync(CacheConstant.LatestPosts);
            await _distributedCacheService.RemoveAsync(CacheConstant.PopularPosts);
            await _distributedCacheService.RemoveAsync(CacheConstant.TrendingPosts);
            await _distributedCacheService.RemoveAsync(CacheConstant.PostsPaging);
            await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
            
            request.Labels = request.Labels[0].Split("#").Select(x => x.Trim())
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .ToArray();

            post.Labels = string.Join(',', request.Labels);
            post.Labels = post.Labels.Trim().TrimStart(',');
        }
        
        // Process Slug
        if (string.IsNullOrEmpty(post.Slug)) 
            post.Slug = TextHelper.ToUnsignString(post.Title);
        
        // Process Owner User Id
        post.OwnerUserId = userId;
        
        // Id (using Sequence)
        post.Id = await _sequenceService.GetPostNewId();
        
        // Process label
        if (request.Labels.Length > 0) 
            await _repository.ProcessLabel(request, post);
        
        // Process Cover Image
        if (request.CoverImage != null)
        {
            var coverImagePath = await SaveFile(request.CoverImage);
            post.CoverImage = coverImagePath;
        }
        
        // Update number of post in user
        var user = await _userManager.FindByIdAsync(post.OwnerUserId);
        
        if (user != null)
        {
            var numberOfPost = user.NumberOfPosts;
            numberOfPost += 1;
            user.NumberOfPosts = numberOfPost;
            await _userManager.UpdateAsync(user);
        }

        var result = await _repository.Post(post);
        return result;
    }

    public async Task<bool> Put(int id, PostCreateRequest request)
    {
        var result = await _repository.Put(id, request);
        if (!result)
            return result;

        // Remove cached previous save for post
        await _distributedCacheService.RemoveAsync(CacheConstant.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<bool> Delete(int id)
    {
        var result = await _repository.Delete(id);
        if (!result)
            return result;
        
        // Remove cached previous save for post
        await _distributedCacheService.RemoveAsync(CacheConstant.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<bool> UpdateViewCount(int id)
    {
        var result = await _repository.UpdateViewCount(id);
        return result;
    }

    public async Task<List<VoteVm>> GetVotes(int postId)
    {
        var result = await _repository.GetVotes(postId);
        return result;
    }

    public async Task<int> PostVote(int postId, string userId)
    {
        var result = await _repository.PostVote(postId, userId);
        return result;
    }

    public async Task<bool> DeleteVote(int postId, string userId)
    {
        var result = await _repository.DeleteVote(postId, userId);
        return result;
    }

    public async Task<bool> PostReport(int postId, ReportCreateRequest request, string userId)
    {
        var result = await _repository.PostReport(postId, request, userId);
        return result;
    }

    public async Task<List<CommentVm>> GetRecentComments(int take)
    {
        var result = await _repository.GetRecentComments(take);
        return result;
    }

    public async Task<IEnumerable<CommentVm>> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize)
    {
        var result = await _repository.GetCommentTreeByPostId(postId, pageIndex, pageSize);
        return result;
    }

    public async Task<List<CommentVm>> GetCommentsByPostId(int postId)
    {
        var result = await _repository.GetCommentsByPostId(postId);
        return result;
    }

    public async Task<CommentVm?> GetCommentDetail(int commentId)
    {
        var result = await _repository.GetCommentDetail(commentId);
        return result;
    }

    public async Task<List<CommentVm>> GetComments()
    {
        var result = await _repository.GetComments();
        return result;
    }

    public async Task<bool> PostComment(int postId, CommentCreateRequest request, string userId)
    {
        var result = await _repository.PostComment(postId, request, userId);
        return result;
    }

    public async Task<bool> PutComment(int commentId, CommentCreateRequest request, string userId)
    {
        var result = await _repository.PutComment(commentId, request, userId);
        return result;
    }

    public async Task<bool> DeleteComment(int postId, int commentId)
    {
        var result = await _repository.DeleteComment(postId, commentId);
        return result;
    }
    
    #region Helpers

    private async Task<string> SaveFile(IFormFile file)
    {
        var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName?.Trim('"');
        var fileName = FileHelper.GenerateFileName("Image") + Path.GetExtension(originalFileName);
        await _storageService.SaveFileAsync(file.OpenReadStream(), fileName);
        var filePath = _storageService.GetFileUrl(fileName);
        return filePath;
    }
    #endregion
}