using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Utilities.Constants;

namespace CodeSharing.Server.Repositories;

public class CategoryRepository : GenericRepository<Category, int>, ICategoryRepository
{
    private readonly ICacheService _distributedCacheService;
    private readonly ILogger<CategoryRepository> _logger;

    public CategoryRepository(ApplicationDbContext context, ICacheService distributedCacheService, ILogger<CategoryRepository> logger) : base(context)
    {
        _distributedCacheService = distributedCacheService;
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
    
    public async Task<bool> PostCategory(Category category)
    {
        try
        {
            await CreateAsync(category);
            var result = await SaveChangesAsync();
            if (result <= 0)
                return false;

            await _distributedCacheService.RemoveAsync(CacheConstants.Categories);
            return true;

        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> PutCategory(Category category)
    {
        try
        {
            await UpdateAsync(category);
            var result = await SaveChangesAsync();
            if (result <= 0)
                return false;
            
            await _distributedCacheService.RemoveAsync(CacheConstants.Categories);
            return true;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> DeleteCategory(Category category)
    {
        try
        {
            await DeleteAsync(category);
            var result = await SaveChangesAsync();
            if (result <= 0)
                return false;
            
            await _distributedCacheService.RemoveAsync(CacheConstants.Categories);
            return true;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}