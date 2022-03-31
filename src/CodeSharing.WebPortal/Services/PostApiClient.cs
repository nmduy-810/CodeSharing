using System.Text;
using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.WebPortal.Interfaces;

namespace CodeSharing.WebPortal.Services;

public class PostApiClient : BaseApiClient, IPostApiClient
{
    public PostApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) 
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
        
    }
    
    public async Task<List<PostQuickVm>> GetPopularPosts(int take)
    {
        return await GetListAsync<PostQuickVm>($"/api/posts/popular/{take}");
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
}