using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.DTL.Models.Contents.Category;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ICategoryRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<CategoryVm>> GetCategories();

    Task<CategoryVm?> GetById(int id);
    
    Task<bool> PostCategory(CategoryCreateRequest request);

    Task<bool> PutCategory(int id, CategoryUpdateRequest request);

    Task<bool> DeleteCategory(int id);
}