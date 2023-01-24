using System.Net.Http.Headers;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Constants;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Contents.Vote;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Services;

public class PostService : IPostService
{
    private readonly IPostRepository _repository;
    private readonly ICacheService _distributedCacheService;
    private readonly ISequenceService _sequenceService;
    private readonly IStorageService _storageService;
    private readonly UserManager<User> _userManager;

    public PostService(IPostRepository repository, ICacheService distributedCacheService, ISequenceService sequenceService, IStorageService storageService, UserManager<User> userManager)
    {
        _repository = repository;
        _distributedCacheService = distributedCacheService;
        _sequenceService = sequenceService;
        _storageService = storageService;
        _userManager = userManager;
    }

    public async Task<List<PostQuickVm>> GetPosts()
    {
        var result = await _repository.GetPosts();
        return result;
    }

    public async Task<List<PostQuickVm>> GetLatestPosts(int take)
    {
        var cacheData = await _distributedCacheService.GetAsync<List<PostQuickVm>>(CacheConstants.LatestPosts);
        if (cacheData != null)
            return cacheData;
        
        var result = await _repository.GetLatestPosts(take);
        await _distributedCacheService.SetAsync(CacheConstants.LatestPosts, result, 2);
        return result;
    }

    public async Task<List<PostQuickVm>> GetPopularPosts(int take)
    {
        var cacheData = await _distributedCacheService.GetAsync<List<PostQuickVm>>(CacheConstants.PopularPosts);
        if (cacheData != null)
            return cacheData;
        
        var result = await _repository.GetPopularPosts(take);
        await _distributedCacheService.SetAsync(CacheConstants.PopularPosts, result, 2);
        return result;
    }

    public async Task<List<PostQuickVm>> GetTrendingPosts(int take)
    {
        var cacheData = await _distributedCacheService.GetAsync<List<PostQuickVm>>(CacheConstants.TrendingPosts);
        if (cacheData != null)
            return cacheData;
        
        var result = await _repository.GetTrendingPosts(take);
        await _distributedCacheService.SetAsync(CacheConstants.TrendingPosts, result, 2);
        return result;
    }

    public async Task<PostVm?> GetById(int id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var result = await _repository.GetPostsByCategoryId(categoryId, pageIndex, pageSize);
        return result;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        var result = await _repository.GetPostsByTagId(tagId, pageIndex, pageSize);
        return result;
    }

    public async Task<List<PostQuickVm>> GetTotalPostInCategory()
    {
        var result = await _repository.GetTotalPostInCategory();
        return result;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize)
    {
        var result = await _repository.GetPostsPaging(filter, categoryId, pageIndex, pageSize);
        return result;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsPaging(int pageIndex, int pageSize)
    {
        var cacheData = await _distributedCacheService.GetAsync<Pagination<PostQuickVm>>(CacheConstants.PostsPaging);
        if (cacheData != null)
            return cacheData;
        
        var result = await _repository.GetPostsPaging(pageIndex, pageSize);
        await _distributedCacheService.SetAsync(CacheConstants.PostsPaging, result, 2);
        return result;
    }

    public async Task<bool> Post(PostCreateRequest request, string userId)
    {
        var post = new Post
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
            await _distributedCacheService.RemoveAsync(CacheConstants.LatestPosts);
            await _distributedCacheService.RemoveAsync(CacheConstants.PopularPosts);
            await _distributedCacheService.RemoveAsync(CacheConstants.TrendingPosts);
            await _distributedCacheService.RemoveAsync(CacheConstants.PostsPaging);
            await _distributedCacheService.RemoveAsync(CacheConstants.Categories);
            
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
        await _distributedCacheService.RemoveAsync(CacheConstants.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstants.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstants.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstants.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstants.Categories);
        return result;
    }

    public async Task<bool> Delete(int id)
    {
        var result = await _repository.Delete(id);
        if (!result)
            return result;
        
        // Remove cached previous save for post
        await _distributedCacheService.RemoveAsync(CacheConstants.LatestPosts);
        await _distributedCacheService.RemoveAsync(CacheConstants.PopularPosts);
        await _distributedCacheService.RemoveAsync(CacheConstants.TrendingPosts);
        await _distributedCacheService.RemoveAsync(CacheConstants.PostsPaging);
        await _distributedCacheService.RemoveAsync(CacheConstants.Categories);
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