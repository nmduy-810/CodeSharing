using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Services.Serialize;
using CodeSharing.DTL.Models.Contents.About;
using CodeSharing.Portal.Interfaces;

namespace CodeSharing.Portal.Services;

public class AboutApiClient : BaseApiClient, IAboutApiClient
{
    public AboutApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor, ISerializeService serializeService)
        : base(httpClientFactory, configuration, httpContextAccessor, serializeService)
    {
    }

    public async Task<Result<AboutVm>> GetById(int id)
    {
        return await GetAsync<AboutVm>($"/api/abouts/{id}");
    }
}