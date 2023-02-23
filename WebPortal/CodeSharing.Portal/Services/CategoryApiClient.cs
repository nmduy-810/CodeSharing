using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.Portal.Interfaces;

namespace CodeSharing.Portal.Services;

public class CategoryApiClient : BaseApiClient, ICategoryApiClient
{
    public CategoryApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor)
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<Result<List<CategoryVm>>> GetCategories()
    {
        return await GetListAsync<CategoryVm>("/api/categories");
    }

    public async Task<Result<CategoryVm>> GetById(int id)
    {
        return await GetAsync<CategoryVm>($"/api/categories/{id}");
    }
}