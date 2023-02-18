using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Systems.Role;

namespace CodeSharing.Server.Services.Interfaces;

public interface IRoleService
{
    Task<Result<List<RoleVm>>> GetRoles();

    Task<Result<RoleVm?>> GetById(string id);
}