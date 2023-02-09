using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.WebPortal.Interfaces;

namespace CodeSharing.WebPortal.Services;

public class LabelApiClient : BaseApiClient, ILabelApiClient
{
    public LabelApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor)
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<List<LabelVm>> GetPopularLabels(int take)
    {
        return await GetListAsync<LabelVm>($"/api/labels/popular/{take}");
    }

    public async Task<LabelVm> GetById(string labelId)
    {
        return await GetAsync<LabelVm>($"/api/labels/{labelId}");
    }

    public async Task<List<LabelInPostVm>> GetLabelsByPostId(int id)
    {
        return await GetListAsync<LabelInPostVm>($"/api/labels/post/{id}");
    }
}