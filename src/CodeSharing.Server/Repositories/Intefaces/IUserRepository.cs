using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.Function;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.DTL.Models.Systems.User;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IUserRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<UserVm>> GetUsers();

    Task<Pagination<UserVm>> GetUsersPaging(int pageIndex, int pageSize);

    Task<UserVm?> GetById(string id);

    Task<bool> PostUser(UserCreateRequest request);

    Task<bool> PutUser(string id, UserCreateRequest request);

    Task<bool> PutUserPassword(string id, UserPasswordChangeRequest request);

    Task<bool> DeleteUser(string id);

    Task<List<FunctionVm>> GetMenuByUserPermission(string userId);

    Task<IList<string>?> GetUserRoles(string userId);

    Task<bool> PostRolesToUserUser(string userId, RoleAssignRequest request);

    Task<bool> RemoveRolesFromUser(string userId, RoleAssignRequest request);

    Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize);
}