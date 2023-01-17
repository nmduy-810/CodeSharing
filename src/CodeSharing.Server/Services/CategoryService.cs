using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Contents.Category;

namespace CodeSharing.Server.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _repository;

    public CategoryService(ICategoryRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<List<CategoryVm>> GetCategories() => await _repository.GetCategories();

    public async Task<CategoryVm?> GetById(int id) => await _repository.GetById(id);
    
    public async Task<bool> PostCategory(CategoryCreateRequest request) => await _repository.PostCategory(request);
    
    public async Task<bool> PutCategory(int id, CategoryUpdateRequest request) => await _repository.PutCategory(id, request);

    public async Task<bool> DeleteCategory(int id) => await _repository.DeleteCategory(id);
}