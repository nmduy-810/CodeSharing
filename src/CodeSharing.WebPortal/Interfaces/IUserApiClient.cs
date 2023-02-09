using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.WebPortal.Interfaces;

public interface IUserApiClient
{
    Task<Pagination<UserVm>> GetUsersPaging(int pageIndex, int pageSize);
    Task<UserVm> GetById(string id);
    Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize);
    Task<bool> PutUser(string id, UserCreateRequest request);
}