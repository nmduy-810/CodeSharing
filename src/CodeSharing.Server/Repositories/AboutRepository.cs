using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;

namespace CodeSharing.Server.Repositories;

public class AboutRepository : GenericRepository<About, int>, IAboutRepository
{
    private readonly ILogger<AboutRepository> _logger;

    public AboutRepository(ApplicationDbContext context, ILogger<AboutRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    public async Task<bool> PostAbout(About about)
    {
        try
        {
            await CreateAsync(about);
            var result = await SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> PutAbout(About about)
    {
        try
        {
            await UpdateAsync(about);
            var result = await SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> DeleteAbout(About about)
    {
        try
        {
            await DeleteAsync(about);
            var result = await SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}