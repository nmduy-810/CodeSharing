using CodeSharing.ViewModels.Contents.Contact;
using CodeSharing.ViewModels.Contents.Support;
using CodeSharing.WebPortal.Interfaces;

namespace CodeSharing.WebPortal.Services;

public class ContactApiClient : BaseApiClient, IContactApiClient
{
    public ContactApiClient(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IHttpContextAccessor httpContextAccessor)
        : base(httpClientFactory, configuration, httpContextAccessor)
    {
    }

    public async Task<ContactVm> GetById(int id)
    {
        return await GetAsync<ContactVm>($"/api/contacts/{id}");
    }

    public async Task<bool> PostSupport(SupportCreateRequest request)
    {
        return await PostAsync<SupportCreateRequest, bool>("/api/contacts/", request, false);
    }
}