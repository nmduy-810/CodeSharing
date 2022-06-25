using System.Net.Http.Headers;
using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Comment;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Contents.Report;
using CodeSharing.ViewModels.Contents.Vote;
using CodeSharing.WebPortal.Interfaces;
using Microsoft.AspNetCore.Authentication;

namespace CodeSharing.WebPortal.Services;

public class PostApiClient : BaseApiClient, IPostApiClient
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly IHttpContextAccessor _httpContextAccessor;
    
    public PostApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) 
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
    }
    
    public async Task<List<PostQuickVm>> GetPopularPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"/api/posts/popular/{take}");
    }

    public async Task<List<PostQuickVm>> GetLatestPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"api/posts/latest/{take}");
    }

    public async Task<List<PostQuickVm>> GetTrendingPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"api/posts/trending/{take}");
    }

    public async Task<PostVm> GetDetailsPost(int id)
    {
        return await GetAsync<PostVm>($"/api/posts/{id}");
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByCategoryId(int categoryId, int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>(
            $"/api/posts/category/{categoryId}?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/tags/{tagId}?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<List<PostQuickVm>> GetTotalPostInCategory()
    {
        return await GetListAsync<PostQuickVm>($"/api/posts/total-post");
    }

    public async Task<Pagination<PostQuickVm>> SearchPosts(string keyword, int pageIndex, int pageSize)
    {
        if (!string.IsNullOrEmpty(keyword))
        {
            return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/filter?filter={keyword}&pageIndex={pageIndex}&pageSize={pageSize}");
        }

        return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/paging?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<Pagination<PostQuickVm>> GetLatestPostsPaging(int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/paging?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<List<CommentVm>> GetRecentComments(int take)
    {
        return await GetListAsync<CommentVm>($"/api/posts/comments/recent/{take}");
    }

    public async Task<List<CommentVm>> GetCommentsTree(int postId)
    {
        return await GetListAsync<CommentVm>($"/api/posts/{postId}/comments/tree");
    }

    public async Task<CommentVm> PostComment(CommentCreateRequest request)
    {
        return await PostAsync<CommentCreateRequest, CommentVm>($"/api/posts/{request.PostId}/comments", request);
    }

    public async Task<int> PostVote(VoteCreateRequest request)
    {
        return await PostAsync<VoteCreateRequest, int>($"/api/posts/{request.PostId}/votes", request, true);
    }

    public async Task<bool> UpdateViewCount(int id)
    {
        return await PutAsync<object, bool>($"/api/posts/{id}/view-count", id, false);
    }

    public async Task<ReportVm> PostReport(ReportCreateRequest request)
    {
        return await PostAsync<ReportCreateRequest, ReportVm>($"/api/posts/{request.PostId}/reports", request);
    }

    public async Task<bool> PostPost(PostCreateRequest request)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        using var requestContent = new MultipartFormDataContent();
        
        // Category Id
        requestContent.Add(new StringContent(request.CategoryId.ToString()), "categoryId");
        
        // Title
        requestContent.Add(new StringContent(request.Title), "title");
        
        // Summary
        requestContent.Add(new StringContent(request.Summary), "summary");
        
        // Content
        requestContent.Add(new StringContent(request.Content), "content");
        
        // Note
        requestContent.Add(new StringContent(request.Note), "note");
        
        // Cover Image
        if (request.CoverImage != null)
        {
            byte[] data;
            using (var br = new BinaryReader(request.CoverImage.OpenReadStream()))
            {
                data = br.ReadBytes((int)request.CoverImage.OpenReadStream().Length);
            }

            var bytes = new ByteArrayContent(data);
            requestContent.Add(bytes, "coverImage", request.CoverImage.FileName);
        }
        
        // Labels
        if (request.Labels.Length > 0)
        {
            foreach (var label in request.Labels)
            {
                requestContent.Add(new StringContent(label), "labels");
            }
        }
        
        if (_httpContextAccessor.HttpContext != null)
        {
            var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }
        
        var response = await client.PostAsync($"/api/posts/", requestContent);
        return response.IsSuccessStatusCode;
    }

    public async Task<bool> PutPost(int id, PostCreateRequest request)
    {
        var client = _httpClientFactory.CreateClient();
        client.BaseAddress = new Uri(_configuration["ServerUrl"]);
        using var requestContent = new MultipartFormDataContent();
        
        // Category Id
        requestContent.Add(new StringContent(request.CategoryId.ToString()), "categoryId");
        
        // Title
        requestContent.Add(new StringContent(request.Title), "title");
        
        // Summary
        requestContent.Add(new StringContent(request.Summary), "summary");
        
        // Content
        requestContent.Add(new StringContent(request.Content), "content");
        
        // Note
        requestContent.Add(new StringContent(request.Note), "note");
        
        // Cover Image
        if (request.CoverImage != null)
        {
            byte[] data;
            using (var br = new BinaryReader(request.CoverImage.OpenReadStream()))
            {
                data = br.ReadBytes((int)request.CoverImage.OpenReadStream().Length);
            }

            var bytes = new ByteArrayContent(data);
            requestContent.Add(bytes, "coverImage", request.CoverImage.FileName);
        }
        
        // Labels
        if (request.Labels.Length > 0)
        {
            foreach (var label in request.Labels)
            {
                requestContent.Add(new StringContent(label), "labels");
            }
        }
        
        if (_httpContextAccessor.HttpContext != null)
        {
            var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }
        
        var response = await client.PutAsync($"/api/posts/{id}", requestContent);
        return response.IsSuccessStatusCode;
    }

    public async Task<bool> DeletePost(int id)
    {
        return await DeleteAsync<bool>($"/api/posts/{id}");
    }
}