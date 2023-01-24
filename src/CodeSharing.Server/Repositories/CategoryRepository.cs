using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Contents.Category;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class CategoryRepository : GenericRepository<ApplicationDbContext>, ICategoryRepository
{
    private readonly ICacheService _distributedCacheService;
    private readonly ILogger<CategoryRepository> _logger;

    public CategoryRepository(ApplicationDbContext context, ICacheService distributedCacheService, ILogger<CategoryRepository> logger) : base(context)
    {
        _distributedCacheService = distributedCacheService;
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public async Task<List<CategoryVm>> GetCategories()
    {
        // Check cached data have value in database
        var cacheData = await _distributedCacheService.GetAsync<List<CategoryVm>>(CacheConstants.Categories);
        
        // If in database not data
        if (cacheData == null)
        {
            var items = await _context.Categories.Select(x => new CategoryVm
            {
                Id = x.Id,
                ParentCategoryId = x.ParentCategoryId,
                Title = x.Title,
                Slug = x.Slug,
                SortOrder = x.SortOrder,
                IsParent = x.IsParent
            }).OrderBy(x => x.SortOrder).ToListAsync();

            // Set categories data into cached with key
            await _distributedCacheService.SetAsync("Categories", items);
            cacheData = items;
        }
            
        return cacheData;
    }

    public async Task<CategoryVm?> GetById(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
            return null;
        
        var item = new CategoryVm
        {
            Id = category.Id,
            ParentCategoryId = category.ParentCategoryId,
            Title = category.Title,
            Slug = category.Slug,
            SortOrder = category.SortOrder,
            IsParent = category.IsParent
        };
        
        return item;
    }
    
    public async Task<bool> PostCategory(CategoryCreateRequest request)
    {
        try
        {
            var item = new Category
            {
                ParentCategoryId = request.ParentCategoryId,
                Title = request.Title,
                Slug = request.Slug,
                SortOrder = request.SortOrder,
                IsParent = request.IsParent
            };

            await _context.Categories.AddAsync(item);
            var result = await _context.SaveChangesAsync();
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

    public async Task<bool> PutCategory(int id, CategoryUpdateRequest request)
    {
        try
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
                return false;

            if (id == request.ParentCategoryId)
                return false;
        
            category.ParentCategoryId = request.ParentCategoryId;
            category.Title = request.Title;
            category.Slug = request.Slug;
            category.SortOrder = request.SortOrder;
            category.IsParent = request.IsParent;

            _context.Categories.Update(category);
            var result = await _context.SaveChangesAsync();
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

    public async Task<bool> DeleteCategory(int id)
    {
        try
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
                return false;

            _context.Categories.Remove(category);
            var result = await _context.SaveChangesAsync();
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