using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Systems.Role;

namespace CodeSharing.Server.Services;

public class RoleService : IRoleService
{
    private readonly IRoleRepository _roleRepository;

    public RoleService(IRoleRepository roleRepository)
    {
        _roleRepository = roleRepository;
    }

    public async Task<List<RoleVm>?> GetRoles()
    {
        var result = await _roleRepository.GetRoles();
        return result;
    }

    public async Task<RoleVm?> GetById(string id)
    {
        var result = await _roleRepository.GetById(id);
        return result;
    }
}