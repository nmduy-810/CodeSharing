using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Role;

public class RoleRepository : CoreRepository<IdentityRole>, IRoleRepository
{
    private readonly ILogger<RoleRepository> _logger;
    public RoleRepository(ApplicationDbContext context, ILogger<RoleRepository> logger) : base(context)
    {
        _logger = logger;
    }

    public async Task<List<IdentityRole>> GetRoles()
    {
        try
        {
            return await FindAll().ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<IdentityRole>();
        }
    }

    public async Task<IdentityRole?> GetById(string id)
    {
        try
        {
            var role = await FindByIdAsync(id);
            return role ?? null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
}