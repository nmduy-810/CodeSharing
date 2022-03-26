using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CodeSharing.Server.Datas.Provider;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
{
    public ApplicationDbContext CreateDbContext(string[] args)
    {
        // Get current environment name. Example: Development, Production,...
        var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

        // Get file appsettings.XXX.json and content
        var configurationRoot = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .AddJsonFile($"appsettings.{environmentName}.json")
            .Build();

        // Create builder
        var builder = new DbContextOptionsBuilder<ApplicationDbContext>();

        // Get connection string value in appsettings.json
        var connectionString = configurationRoot.GetConnectionString("DefaultConnection");

        // Connect to SQL Server
        builder.UseSqlServer(connectionString);

        return new ApplicationDbContext(builder.Options);
    }
}