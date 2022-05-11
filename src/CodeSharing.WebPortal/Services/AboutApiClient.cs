using CodeSharing.ViewModels.Contents.About;
using CodeSharing.WebPortal.Interfaces;

namespace CodeSharing.WebPortal.Services;

public class AboutApiClient : BaseApiClient, IAboutApiClient
{
    public AboutApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<AboutVm> GetById(int id)
    {
        return await GetAsync<AboutVm>($"/api/abouts/{id}");
    }
}