using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.Infrastructure.EFCore.Repositories.Category;
using CodeSharing.Server.AdditionalServices.Interfaces;

namespace CodeSharing.Server.Services;

public class CategoryService : BaseService, ICategoryService
{
    private readonly ICategoryRepository _repository;
    private readonly ICacheService _distributedCacheService;
    public CategoryService(ICategoryRepository repository, ICacheService distributedCacheService, IUtils utils) : base(utils)
    {
        _repository = repository;
        _distributedCacheService = distributedCacheService;
    }

    public async Task<Result<List<CategoryVm>>> GetCategories()
    {
        var result = new Result<List<CategoryVm>>();
        try
        {
            // Check cached data have value in database
            var cacheData = await _distributedCacheService.GetAsync<List<CategoryVm>>(CacheConstant.Categories);
            if (cacheData != null)
            {
                result.SetResult(cacheData);
                return result;
            }
            
            var data = await _repository.GetCategories();
            await _distributedCacheService.SetAsync(CacheConstant.Categories, data, 2);
            result.SetResult(_utils.Transform<List<CdsCategory>, List<CategoryVm>>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }

    public async Task<Result<CategoryVm?>> GetById(int id)
    {
        var result = new Result<CategoryVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            
            result.SetResult(_utils.Transform<CdsCategory, CategoryVm>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
    
        return result;
    }

    public async Task<Result<CategoryVm?>> PostCategory(CategoryCreateRequest request)
    {
        var result = new Result<CategoryVm?>();
        try
        {
            var item = new CdsCategory()
            {
                ParentCategoryId = request.ParentCategoryId,
                Title = request.Title,
                Slug = request.Slug,
                SortOrder = request.SortOrder,
                IsParent = request.IsParent
            };
            
            var data = await _repository.PostCategory(item);
            if (data != null)
                result.SetResult(_utils.Transform<CdsCategory, CategoryVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<Result<CategoryVm?>> PutCategory(int id, CategoryUpdateRequest request)
    {
        var result = new Result<CategoryVm?>();
        try
        {
            var category = await _repository.FindByIdAsync(id);
            if (category == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }

            if (id == request.ParentCategoryId)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
        
            category.ParentCategoryId = request.ParentCategoryId;
            category.Title = request.Title;
            category.Slug = request.Slug;
            category.SortOrder = request.SortOrder;
            category.IsParent = request.IsParent;
            
            var data = await _repository.PutCategory(category);
            if (data != null)
                result.SetResult(_utils.Transform<CdsCategory, CategoryVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessUpdate);

        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }

    public async Task<Result<CategoryVm?>> DeleteCategory(int id)
    {
        var result = new Result<CategoryVm?>();
        try
        {
            var category = await _repository.FindByIdAsync(id);
            if (category == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            
            var data = await _repository.DeleteCategory(category);
            if (data != null)
                result.SetResult(_utils.Transform<CdsCategory, CategoryVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessDelete);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        await _distributedCacheService.RemoveAsync(CacheConstant.Categories);
        return result;
    }
}