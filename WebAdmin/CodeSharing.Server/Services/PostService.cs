using System.Net.Http.Headers;
using CodeSharing.Core.Helpers;
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Services;

public class PostService : BaseService, IPostService
{
    private readonly IPostRepository _repository;
    private readonly ICacheService _distributedCacheService;
    private readonly ISequenceService _sequenceService;
    private readonly IStorageService _storageService;
    private readonly UserManager<CdsUser> _userManager;

    public PostService(IPostRepository repository, ICacheService distributedCacheService, ISequenceService sequenceService, IStorageService storageService, UserManager<CdsUser> userManager, IUtils utils) : base(utils)
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

    public async Task<Result<PostQuickVm?>> Post(PostCreateRequest request, string userId)
    {
        var result = new Result<PostQuickVm?>();
        try
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
            
            var data = await _repository.Post(post);
            if (data != null)
                result.SetResult(_utils.Transform<CdsPost, PostQuickVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<PostQuickVm?>> Put(int id, PostCreateRequest request)
    {
        var result = new Result<PostQuickVm?>();
        try
        {
            var data = await _repository.Put(id, request);
            if (data != null)
                result.SetResult(_utils.Transform<CdsPost, PostQuickVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessUpdate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        // Remove cached previous save for post
        await _distributedCacheService.RemoveAsync(CacheConstant.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<Result<PostQuickVm?>> Delete(int id)
    {
        var result = new Result<PostQuickVm?>();
        try
        {
            var data = await _repository.Delete(id);
            if (data != null)
                result.SetResult(_utils.Transform<CdsPost, PostQuickVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessDelete);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        // Remove cached previous save for post
        await _distributedCacheService.RemoveAsync(CacheConstant.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<Result<PostQuickVm?>> UpdateViewCount(int id)
    {
        var result = new Result<PostQuickVm?>();
        try
        {
            var data = await _repository.UpdateViewCount(id);
            if (data != null)
                result.SetResult(_utils.Transform<CdsPost, PostQuickVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessUpdate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        // Remove cached previous save for post
        await _distributedCacheService.RemoveAsync(CacheConstant.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstant.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<Result<List<VoteVm>>> GetVotes(int postId)
    {
        var result = new Result<List<VoteVm>>();
        try
        {
            var data = await _repository.GetVotes(postId);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<int>> PostVote(int postId, string userId)
    {
        var result = new Result<int>();
        try
        {
            var data = await _repository.PostVote(postId, userId);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<VoteVm?>> DeleteVote(int postId, string userId)
    {
        var result = new Result<VoteVm?>();
        try
        {
            var data = await _repository.DeleteVote(postId, userId);
            if (data != null)
                result.SetResult(_utils.Transform<CdsVote, VoteVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessDelete);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<ReportVm?>> PostReport(int postId, ReportCreateRequest request, string userId)
    {
        var result = new Result<ReportVm?>();
        try
        {
            var data = await _repository.PostReport(postId, request, userId);
            if (data != null)
                result.SetResult(_utils.Transform<CdsReport, ReportVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<CommentVm>>> GetRecentComments(int take)
    {
        var result = new Result<List<CommentVm>>();
        try
        {
            var data = await _repository.GetRecentComments(take);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<IEnumerable<CommentVm>>> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize)
    {
        var result = new Result<IEnumerable<CommentVm>>();
        try
        {
            var data = await _repository.GetCommentTreeByPostId(postId, pageIndex, pageSize);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<CommentVm>>> GetCommentsByPostId(int postId)
    {
        var result = new Result<List<CommentVm>>();
        try
        {
            var data = await _repository.GetCommentsByPostId(postId);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<CommentVm?>> GetCommentDetail(int commentId)
    {
        var result = new Result<CommentVm?>();
        try
        {
            var data = await _repository.GetCommentDetail(commentId);
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

    public async Task<Result<List<CommentVm>>> GetComments()
    {
        var result = new Result<List<CommentVm>>();
        try
        {
            var data = await _repository.GetComments();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<CommentVm?>> PostComment(int postId, CommentCreateRequest request, string userId)
    {
        var result = new Result<CommentVm?>();
        try
        {
            var data = await _repository.PostComment(postId, request, userId);
            if (data != null)
                result.SetResult(_utils.Transform<CdsComment, CommentVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<CommentVm?>> PutComment(int commentId, CommentCreateRequest request, string userId)
    {
        var result = new Result<CommentVm?>();
        try
        {
            var data = await _repository.PutComment(commentId, request, userId);
            if (data != null)
                result.SetResult(_utils.Transform<CdsComment, CommentVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessUpdate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<CommentVm?>> DeleteComment(int postId, int commentId)
    {
        var result = new Result<CommentVm?>();
        try
        {
            var data = await _repository.DeleteComment(postId, commentId);
            if (data != null)
                result.SetResult(_utils.Transform<CdsComment, CommentVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessDelete);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
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