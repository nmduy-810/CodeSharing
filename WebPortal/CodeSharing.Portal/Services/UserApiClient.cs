using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.User;
using CodeSharing.Portal.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Services;

public class UserApiClient : BaseApiClient, IUserApiClient
{
    public UserApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor)
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<Result<Pagination<UserVm>>> GetUsersPaging(int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<UserVm>>($"/api/users/paging?pageIndex={pageIndex}&pageSize={pageSize}", true);
    }

    public async Task<Result<UserVm>> GetById(string id)
    {
        return await GetAsync<UserVm>($"/api/users/{id}", true);
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        return await GetAsync<Pagination<PostQuickVm>>($"/api/users/{userId}/posts?pageIndex={pageIndex}&pageSize={pageSize}", true);
    }

    public async Task<Result<UserVm>> PutUser(string id, [FromBody] UserCreateRequest request)
    {
        return await PutAsync<object, UserVm>($"/api/users/{id}", request);
    }
}