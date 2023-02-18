using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Role;

public interface IRoleRepository : ICoreRepository<IdentityRole>
{
    Task<List<IdentityRole>> GetRoles();

    Task<IdentityRole?> GetById(string id);
}