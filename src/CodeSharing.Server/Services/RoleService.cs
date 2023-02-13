using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.Infrastructure.EFCore.Repositories.Role;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Services;

public class RoleService : BaseService, IRoleService
{
    private readonly IRoleRepository _repository;

    public RoleService(IRoleRepository repository, IUtils utils) : base(utils)
    {
        _repository = repository;
    }

    public async Task<Result<List<RoleVm>>> GetRoles()
    {
        var result = new Result<List<RoleVm>>();
        try
        {
            var data = await _repository.GetRoles();
            result.SetResult(_utils.Transform<List<IdentityRole>, List<RoleVm>>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }

    public async Task<Result<RoleVm?>> GetById(string id)
    {
        var result = new Result<RoleVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            
            result.SetResult(_utils.Transform<IdentityRole, RoleVm>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
    
        return result;
    }
}