using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.Function;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Server.Services.Interfaces;

public interface IUserService
{
    Task<Result<List<UserVm>>> GetUsers();

    Task<Result<Pagination<UserVm>>> GetUsersPaging(int pageIndex, int pageSize);

    Task<Result<UserVm?>> GetById(string id);

    Task<Result<bool>> PostUser(UserCreateRequest request);

    Task<Result<bool>> PutUser(string id, UserCreateRequest request);

    Task<Result<bool>> PutUserPassword(string id, UserPasswordChangeRequest request);

    Task<Result<bool>> DeleteUser(string id);

    Task<Result<List<FunctionVm>>> GetMenuByUserPermission(string userId);

    Task<Result<IList<string>?>> GetUserRoles(string userId);

    Task<Result<bool>> PostRolesToUserUser(string userId, RoleAssignRequest request);

    Task<Result<bool>> RemoveRolesFromUser(string userId, RoleAssignRequest request);

    Task<Result<Pagination<PostQuickVm>>> GetPostsByUserId(string userId, int pageIndex, int pageSize);
}