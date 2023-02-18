using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.Function;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.DTL.Models.Systems.User;
using CodeSharing.Infrastructure.EFCore.Repositories.User;

namespace CodeSharing.Server.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _repository;
    
    public UserService(IUserRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<Result<List<UserVm>>> GetUsers()
    {
        var result = new Result<List<UserVm>>();
        try
        {
            var data =  await _repository.GetUsers();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<Pagination<UserVm>>> GetUsersPaging(int pageIndex, int pageSize)
    {
        var result = new Result<Pagination<UserVm>>();
        try
        {
            var data = await _repository.GetUsersPaging(pageIndex, pageSize);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<UserVm?>> GetById(string id)
    {
        var result = new Result<UserVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<bool>> PostUser(UserCreateRequest request)
    {
        var result = new Result<bool>();
        try
        {
            var data = await _repository.PostUser(request);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<bool>> PutUser(string id, UserCreateRequest request)
    {
        var result = new Result<bool>();
        try
        {
            var data = await _repository.PutUser(id, request);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<bool>> PutUserPassword(string id, UserPasswordChangeRequest request)
    {
        var result = new Result<bool>();
        try
        {
            var data = await _repository.PutUserPassword(id, request);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<bool>> DeleteUser(string id)
    {
        var result = new Result<bool>();
        try
        {
            var data = await _repository.DeleteUser(id);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<FunctionVm>>> GetMenuByUserPermission(string userId)
    {
        var result = new Result<List<FunctionVm>>();
        try
        {
            var data = await _repository.GetMenuByUserPermission(userId);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<IList<string>?>> GetUserRoles(string userId)
    {
        var result = new Result<IList<string>?>();
        try
        {
            var data = await _repository.GetUserRoles(userId);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async  Task<Result<bool>> PostRolesToUserUser(string userId, RoleAssignRequest request)
    {
        var result = new Result<bool>();
        try
        {
            var data = await _repository.PostRolesToUserUser(userId, request);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<bool>> RemoveRolesFromUser(string userId, RoleAssignRequest request)
    {
        var result = new Result<bool>();
        try
        {
            var data = await _repository.RemoveRolesFromUser(userId, request);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<Pagination<PostQuickVm>>> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        var result = new Result<Pagination<PostQuickVm>>();
        try
        {
            var data =  await _repository.GetPostsByUserId(userId, pageIndex, pageSize);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
}