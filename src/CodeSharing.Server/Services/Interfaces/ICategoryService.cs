using CodeSharing.ViewModels.Contents.Category;

namespace CodeSharing.Server.Services.Interfaces;

public interface ICategoryService
{
    Task<List<CategoryVm>> GetCategories();
    
    Task<CategoryVm?> GetById(int id);
    
    Task<bool> PostCategory(CategoryCreateRequest request);

    Task<bool> PutCategory(int id, CategoryUpdateRequest request);

    Task<bool> DeleteCategory(int id);
}