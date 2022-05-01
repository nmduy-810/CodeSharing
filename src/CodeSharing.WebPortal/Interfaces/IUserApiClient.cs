using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.Interfaces;

public interface IUserApiClient
{
    Task<UserVm> GetById(string id);
    Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize);
}