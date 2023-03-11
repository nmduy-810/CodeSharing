using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Services.Serialize;
using CodeSharing.DTL.Models.Contents.CoverImage;
using CodeSharing.Portal.Interfaces;

namespace CodeSharing.Portal.Services;

public class CoverImageApiClient : BaseApiClient, ICoverImagesApiClient
{
    public CoverImageApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration, IHttpContextAccessor httpContextAccessor, ISerializeService serializeService) 
        : base(httpClientFactory, configuration, httpContextAccessor, serializeService)
    {
    }
    
    public async Task<Result<List<CoverImageVm>>> GetCoverImages()
    {
        return await GetListAsync<CoverImageVm>($"/api/coverimages/");
    }
    
    public async Task<Result<CoverImageVm>> GetCoverImageById(int id)
    {
        return await GetAsync<CoverImageVm>($"/api/coverimages/{id}");
    }
}