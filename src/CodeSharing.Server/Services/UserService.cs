using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.Function;
using CodeSharing.ViewModels.Systems.Role;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.Server.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _repository;
    
    public UserService(IUserRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<List<UserVm>> GetUsers()
    {
        var result = await _repository.GetUsers();
        return result;
    }

    public async Task<Pagination<UserVm>> GetUsersPaging(int pageIndex, int pageSize)
    {
        var result = await _repository.GetUsersPaging(pageIndex, pageSize);
        return result;
    }

    public async Task<UserVm?> GetById(string id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<bool> PostUser(UserCreateRequest request)
    {
        var result = await _repository.PostUser(request);
        return result;
    }

    public async Task<bool> PutUser(string id, UserCreateRequest request)
    {
        var result = await _repository.PutUser(id, request);
        return result;
    }

    public async Task<bool> PutUserPassword(string id, UserPasswordChangeRequest request)
    {
        var result = await _repository.PutUserPassword(id, request);
        return result;
    }

    public async Task<bool> DeleteUser(string id)
    {
        var result = await _repository.DeleteUser(id);
        return result;
    }

    public async Task<List<FunctionVm>> GetMenuByUserPermission(string userId)
    {
        var result = await _repository.GetMenuByUserPermission(userId);
        return result;
    }

    public async Task<IList<string>?> GetUserRoles(string userId)
    {
        var result = await _repository.GetUserRoles(userId);
        return result;
    }

    public async Task<bool> PostRolesToUserUser(string userId, RoleAssignRequest request)
    {
        var result = await _repository.PostRolesToUserUser(userId, request);
        return result;
    }

    public async Task<bool> RemoveRolesFromUser(string userId, RoleAssignRequest request)
    {
        var result = await _repository.RemoveRolesFromUser(userId, request);
        return result;
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        var result = await _repository.GetPostsByUserId(userId, pageIndex, pageSize);
        return result;
    }
}