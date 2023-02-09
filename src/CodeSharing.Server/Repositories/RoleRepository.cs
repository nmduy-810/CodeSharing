using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Systems.Role;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class RoleRepository : GenericRepository<ApplicationDbContext>, IRoleRepository
{
    private readonly RoleManager<IdentityRole> _roleManager;
    
    public RoleRepository(ApplicationDbContext context, RoleManager<IdentityRole> roleManager) : base(context)
    {
        _roleManager = roleManager;
    }

    public async Task<List<RoleVm>?> GetRoles()
    {
        var items = await _roleManager.Roles
            .Select(r => new RoleVm
            {
                Id = r.Id,
                Name = r.Name
            }).ToListAsync();
        
        return items;
    }

    public async Task<RoleVm?> GetById(string id)
    {
        var role = await _roleManager.FindByIdAsync(id);
        if (role == null)
            return null;

        var items = new RoleVm
        {
            Id = role.Id,
            Name = role.Name
        };
        
        return items;
    }
}