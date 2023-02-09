using CodeSharing.DTL.Models.Contents.Category;

namespace CodeSharing.WebPortal.Interfaces;

public interface ICategoryApiClient
{
    Task<List<CategoryVm>> GetCategories();
    Task<CategoryVm> GetById(int id);
}