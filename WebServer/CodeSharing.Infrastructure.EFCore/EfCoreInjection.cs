using CodeSharing.Infrastructure.EFCore.Provider;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CodeSharing.Infrastructure.EFCore;

public static class EfCoreInjection
{
    public static void ConfigureApplicationDbContext(this IServiceCollection services,
        IConfiguration configuration)
    {
        // Setup Entity Framework
        services.AddDbContextPool<ApplicationDbContext>(
            options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"), 
                    b => b.MigrationsAssembly("CodeSharing.Server"));
            });
    }
}