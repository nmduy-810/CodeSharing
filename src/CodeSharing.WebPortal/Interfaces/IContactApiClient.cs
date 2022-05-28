using CodeSharing.ViewModels.Contents.Contact;
using CodeSharing.ViewModels.Contents.Support;

namespace CodeSharing.WebPortal.Interfaces;

public interface IContactApiClient
{
    Task<ContactVm> GetById(int id);
    Task<bool> PostSupport(SupportCreateRequest request);
}