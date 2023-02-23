using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Services.Serialize;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.Portal.Interfaces;

namespace CodeSharing.Portal.Services;

public class CategoryApiClient : BaseApiClient, ICategoryApiClient
{
    public CategoryApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor, ISerializeService serializeService)
        : base(httpClientFactory, configuration, httpContextAccessor, serializeService)
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