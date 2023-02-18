using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Contents.Support;
using CodeSharing.Portal.Interfaces;

namespace CodeSharing.Portal.Services;

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