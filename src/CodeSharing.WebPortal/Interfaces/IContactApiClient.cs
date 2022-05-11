using CodeSharing.ViewModels.Contents.Contact;

namespace CodeSharing.WebPortal.Interfaces;

public interface IContactApiClient
{
    Task<ContactVm> GetById(int id);
}