using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Category;

public interface ICategoryRepository : ICoreRepository<CdsCategory>
{
    Task<List<CdsCategory>> GetCategories();

    Task<CdsCategory?> GetById(int id);
    
    Task<CdsCategory?> PostCategory(CdsCategory category);

    Task<CdsCategory?> PutCategory(CdsCategory category);

    Task<CdsCategory?> DeleteCategory(CdsCategory category);
}