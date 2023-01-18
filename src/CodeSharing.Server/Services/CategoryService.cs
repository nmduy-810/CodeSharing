using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Contents.Category;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _repository;
    private readonly ICacheService _distributedCacheService;
    public CategoryService(ICategoryRepository repository, ICacheService distributedCacheService)
    {
        _repository = repository;
        _distributedCacheService = distributedCacheService;
    }

    public async Task<List<CategoryVm>> GetCategories()
    {
        // Check cached data have value in database
        var cacheData = await _distributedCacheService.GetAsync<List<CategoryVm>>(CacheConstants.Categories);
        
        // If in database not data
        if (cacheData == null)
        {
            var items = await _repository.FindAll().Select(x => new CategoryVm
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
        var category = await _repository.GetByIdAsync(id);
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
        var item = new Category
        {
            ParentCategoryId = request.ParentCategoryId,
            Title = request.Title,
            Slug = request.Slug,
            SortOrder = request.SortOrder,
            IsParent = request.IsParent
        };

        var result = await _repository.PostCategory(item);
        return result;
    }

    public async Task<bool> PutCategory(int id, CategoryUpdateRequest request)
    {
        var category = await _repository.GetByIdAsync(id);
        if (category == null)
            return false;

        if (id == request.ParentCategoryId)
            return false;
        
        category.ParentCategoryId = request.ParentCategoryId;
        category.Title = request.Title;
        category.Slug = request.Slug;
        category.SortOrder = request.SortOrder;
        category.IsParent = request.IsParent;

        var result = await _repository.PutCategory(category);
        return result;
    }

    public async Task<bool> DeleteCategory(int id)
    {
        var category = await _repository.GetByIdAsync(id);
        if (category == null)
            return false;

        return await _repository.DeleteCategory(category);
    }
}