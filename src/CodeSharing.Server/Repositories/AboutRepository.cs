using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class AboutRepository : CoreRepository<CdsAbout>, IAboutRepository
{
    private readonly ILogger<AboutRepository> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AboutRepository(ApplicationDbContext context, ILogger<AboutRepository> logger, IHttpContextAccessor httpContextAccessor) : base(context)
    {
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<List<CdsAbout>> GetAbouts()
    {
        try
        {
            return await FindAll().ToListAsync();
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