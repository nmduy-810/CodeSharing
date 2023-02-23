using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.Portal.Interfaces;

namespace CodeSharing.Portal.Services;

public class LabelApiClient : BaseApiClient, ILabelApiClient
{
    public LabelApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor)
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<Result<List<LabelVm>>> GetPopularLabels(int take)
    {
        return await GetListAsync<LabelVm>($"/api/labels/popular/{take}");
    }

    public async Task<Result<LabelVm>> GetById(string labelId)
    {
        return await GetAsync<LabelVm>($"/api/labels/{labelId}");
    }

    public async Task<Result<List<LabelInPostVm>>> GetLabelsByPostId(int id)
    {
        return await GetListAsync<LabelInPostVm>($"/api/labels/post/{id}");
    }
}