using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Category;

namespace CodeSharing.Portal.Interfaces;

public interface ICategoryApiClient
{
    Task<Result<List<CategoryVm>>> GetCategories();
    
    Task<Result<CategoryVm>> GetById(int id);
}