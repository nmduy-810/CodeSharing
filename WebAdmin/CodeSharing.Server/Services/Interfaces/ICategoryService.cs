using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Category;

namespace CodeSharing.Server.Services.Interfaces;

public interface ICategoryService
{
    Task<Result<List<CategoryVm>>> GetCategories();
    
    Task<Result<CategoryVm?>> GetById(int id);
    
    Task<Result<CategoryVm?>> PostCategory(CategoryCreateRequest request);

    Task<Result<CategoryVm?>> PutCategory(int id, CategoryUpdateRequest request);

    Task<Result<CategoryVm?>> DeleteCategory(int id);
}