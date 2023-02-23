using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Portal.Interfaces;

public interface IUserApiClient
{
    Task<Result<Pagination<UserVm>>> GetUsersPaging(int pageIndex, int pageSize);
    
    Task<Result<UserVm>> GetById(string id);
    
    Task<Result<Pagination<PostQuickVm>>> GetPostsByUserId(string userId, int pageIndex, int pageSize);
    
    Task<Result<UserVm>> PutUser(string id, UserCreateRequest request);
}