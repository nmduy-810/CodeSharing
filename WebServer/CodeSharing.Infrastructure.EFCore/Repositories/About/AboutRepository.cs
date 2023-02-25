using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.About;

public class AboutRepository : CoreRepository<CdsAbout>, IAboutRepository
{
    private readonly ILogger<AboutRepository> _logger;
    
    public AboutRepository(ApplicationDbContext context, ILogger<AboutRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    public async Task<List<CdsAbout>> GetAbouts()
    {
        try
        {
            return  await FindAll().ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<CdsAbout>();
        }
    }

    public async Task<CdsAbout?> GetById(int id)
    {
        try
        {
            var about = await FindByIdAsync(id);
            return about ?? null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
    
    public async Task<CdsAbout?> PostAbout(CdsAbout about)
    {
        try
        {
            var entity = await CreateAsync(about);
            return await SaveChangesAsync() > 0 ? entity : null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
    
    public async Task<CdsAbout?> PutAbout(CdsAbout about)
    {
        try
        {
            var entity = UpdateAsync(about);
            return await SaveChangesAsync() > 0 ? entity : null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
    
    public async Task<CdsAbout?> DeleteAbout(CdsAbout about)
    {
        try
        {
            var entity = DeleteAsync(about);
            return await SaveChangesAsync() > 0 ? entity : null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
}