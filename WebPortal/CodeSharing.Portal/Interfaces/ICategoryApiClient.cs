using CodeSharing.DTL.Models.Contents.Category;

namespace CodeSharing.Portal.Interfaces;

public interface ICategoryApiClient
{
    Task<List<CategoryVm>> GetCategories();
    Task<CategoryVm> GetById(int id);
}