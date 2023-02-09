using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Contents.Support;

namespace CodeSharing.WebPortal.Interfaces;

public interface IContactApiClient
{
    Task<ContactVm> GetById(int id);
    Task<bool> PostSupport(SupportCreateRequest request);
}