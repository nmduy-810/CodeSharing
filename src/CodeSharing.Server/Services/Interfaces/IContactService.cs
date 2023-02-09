using CodeSharing.DTL.Models.Contents.Contact;

namespace CodeSharing.Server.Services.Interfaces;

public interface IContactService
{
    Task<List<ContactVm>> GetContacts();

    Task<ContactVm?> GetById(int id);

    Task<bool> PutContact(int id, ContactCreateRequest request);
}