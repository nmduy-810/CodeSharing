using System.Net.Http.Headers;
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.Core.Services.Serialize;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;
using CodeSharing.Portal.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Newtonsoft.Json;

namespace CodeSharing.Portal.Services;

public class PostApiClient : BaseApiClient, IPostApiClient
{
    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ISerializeService _serializeService;

    public PostApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor, ISerializeService serializeService)
        : base(httpClientFactory, configuration, httpContextAccessor, serializeService)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
        _serializeService = serializeService;
    }

    public async Task<Result<List<PostQuickVm>>> GetPopularPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"/api/posts/popular/{take}");
    }

    public async Task<Result<List<PostQuickVm>>> GetLatestPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"api/posts/latest/{take}");
    }

    public async Task<Result<List<PostQuickVm>>> GetTrendingPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"api/posts/trending/{take}");
    }

    public async Task<Result<PostVm>> GetDetailsPost(int id)
    {
        return await GetAsync<PostVm>($"/api/posts/{id}");
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsByCategoryId(int categoryId, int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/category/{categoryId}?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>(
            $"/api/posts/tags/{tagId}?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<Result<List<PostQuickVm>>> GetTotalPostInCategory()
    {
        return await GetListAsync<PostQuickVm>("/api/posts/total-post");
    }

    public async Task<Result<Pagination<PostQuickVm>>> SearchPosts(string keyword, int pageIndex, int pageSize)
    {
        if (!string.IsNullOrEmpty(keyword))
            return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/filter?filter={keyword}&pageIndex={pageIndex}&pageSize={pageSize}");

        return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/paging?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetLatestPostsPaging(int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>($"/api/posts/paging?pageIndex={pageIndex}&pageSize={pageSize}");
    }

    public async Task<Result<List<CommentVm>>> GetRecentComments(int take)
    {
        return await GetListAsync<CommentVm>($"/api/posts/comments/recent/{take}");
    }

    public async Task<Result<List<CommentVm>>> GetCommentsTree(int postId)
    {
        return await GetListAsync<CommentVm>($"/api/posts/{postId}/comments/tree");
    }

    public async Task<Result<CommentVm>> PostComment(CommentCreateRequest request)
    {
        return await PostAsync<CommentCreateRequest, CommentVm>($"/api/posts/{request.PostId}/comments", request);
    }

    public async Task<Result<int>> PostVote(VoteCreateRequest request)
    {
        return await PostAsync<VoteCreateRequest, int>($"/api/posts/{request.PostId}/votes", request);
    }

    public async Task<Result<PostQuickVm>> UpdateViewCount(int id)
    {
        return await PutAsync<object, PostQuickVm>($"/api/posts/{id}/view-count", id, false);
    }

    public async Task<Result<ReportVm>> PostReport(ReportCreateRequest request)
    {
        return await PostAsync<ReportCreateRequest, ReportVm>($"/api/posts/{request.PostId}/reports", request);
    }

    public async Task<Result<PostVm>> PostPost(PostCreateRequest request)
    {
        var client = _httpClientFactory.CreateClient("BackendApi");
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
        else
        {
            requestContent.Add(new StringContent(request.CategoryId.ToString()), "coverImageId");
        }

        // Labels
        if (request.Labels.Length > 0)
            foreach (var label in request.Labels)
                requestContent.Add(new StringContent(label), "labels");

        if (_httpContextAccessor.HttpContext != null)
        {
            var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        var response = await client.PostAsync("/api/posts/", requestContent);
        var body = await response.Content.ReadAsStringAsync();

        if (response.IsSuccessStatusCode)
            return _serializeService.Deserialize<Result<PostVm>>(body) ?? new Result<PostVm>();

        return new Result<PostVm>();
    }

    public async Task<Result<PostVm>> PutPost(int id, PostCreateRequest request)
    {
        var client = _httpClientFactory.CreateClient("BackendApi");
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
        else
        {
            requestContent.Add(new StringContent(request.CoverImageId.ToString()!), "coverImageId");
        }

        // Labels
        if (request.Labels.Length > 0)
            foreach (var label in request.Labels)
                requestContent.Add(new StringContent(label), "labels");

        if (_httpContextAccessor.HttpContext != null)
        {
            var token = await _httpContextAccessor.HttpContext.GetTokenAsync("access_token");
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        var response = await client.PutAsync($"/api/posts/{id}", requestContent);
        var body = await response.Content.ReadAsStringAsync();
        
        if (response.IsSuccessStatusCode)
            return _serializeService.Deserialize<Result<PostVm>>(body) ?? new Result<PostVm>();

        return new Result<PostVm>();
    }

    public async Task<Result<PostVm>> DeletePost(int id)
    {
        return await DeleteAsync<PostVm>($"/api/posts/{id}");
    }
}