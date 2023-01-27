using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Systems.Role;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IRoleRepository : IGenericRepository<ApplicationDbContext>
{
    Task< List<RoleVm>?> GetRoles();

    Task<RoleVm?> GetById(string id);
}