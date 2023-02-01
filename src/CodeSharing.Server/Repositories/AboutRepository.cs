using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class AboutRepository : CoreRepository<About>, IAboutRepository
{
    private readonly ILogger<AboutRepository> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AboutRepository(ApplicationDbContext context, ILogger<AboutRepository> logger, IHttpContextAccessor httpContextAccessor) : base(context)
    {
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<List<AboutVm>> GetAbouts()
    {
        try
        {
            var items = await FindAll().Select(x => new AboutVm
            {
                Id = x.Id,
                Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.Image,
                Description = x.Description
            }).ToListAsync();
            return items;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<AboutVm>();
        }
    }

    public async Task<AboutVm?> GetById(int id)
    {
        try
        {
            var about = await FindByIdAsync(id);
            if (about == null)
                return null;
            
            var item = new AboutVm
            {
                Id = about.Id,
                Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + about.Image,
                Description = about.Description
            };
            return item;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
    
    public async Task<About?> PostAbout(About about)
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
    
    public async Task<About?> PutAbout(About about)
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
    
    public async Task<About?> DeleteAbout(About about)
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