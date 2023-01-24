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
    public CategoryService(ICategoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<CategoryVm>> GetCategories()
    {
        var result = await _repository.GetCategories();
        return result;
    }

    public async Task<CategoryVm?> GetById(int id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<bool> PostCategory(CategoryCreateRequest request)
    {
        var result = await _repository.PostCategory(request);
        return result;
    }

    public async Task<bool> PutCategory(int id, CategoryUpdateRequest request)
    {
        var result = await _repository.PutCategory(id, request);
        return result;
    }

    public async Task<bool> DeleteCategory(int id)
    {
        var result = await _repository.DeleteCategory(id);
        return result;
    }
}