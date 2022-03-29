using CodeSharing.ViewModels.Contents.Category;
using CodeSharing.WebPortal.Interfaces;

namespace CodeSharing.WebPortal.Services;

public class CategoryApiClient : BaseApiClient, ICategoryApiClient
{
    public CategoryApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) 
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
        
    }

    public async Task<List<CategoryVm>> GetCategories()
    {
        return await base.GetListAsync<CategoryVm>("/api/categories");
    }

    public async Task<CategoryVm> GetById(int id)
    {
        return await base.GetAsync<CategoryVm>($"/api/categories/{id}");
    }
}