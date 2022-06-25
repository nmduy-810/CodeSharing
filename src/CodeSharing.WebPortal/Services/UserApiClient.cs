using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.User;
using CodeSharing.WebPortal.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Services;

public class UserApiClient : BaseApiClient, IUserApiClient
{
    public UserApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor)
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<UserVm> GetById(string id)
    {
        return await GetAsync<UserVm>($"/api/users/{id}", true);
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>(
            $"/api/users/{userId}/posts?pageIndex={pageIndex}&pageSize={pageSize}", true);
    }

    public async Task<bool> PutUser(string id, [FromBody] UserCreateRequest request)
    {
        return await PutAsync<object, bool>($"/api/users/{id}", request);
    }
}