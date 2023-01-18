using CodeSharing.Server.Datas.Entities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ICategoryRepository : IGenericRepository<Category, int>
{
    Task<bool> PostCategory(Category category);

    Task<bool> PutCategory(Category category);

    Task<bool> DeleteCategory(Category category);
}