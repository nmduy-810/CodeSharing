using CodeSharing.ViewModels.Systems.Role;

namespace CodeSharing.Server.Services.Interfaces;

public interface IRoleService
{
    Task<List<RoleVm>?> GetRoles();

    Task<RoleVm?> GetById(string id);
}