using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.Contact;

namespace CodeSharing.Server.Services.Interfaces;

public interface IContactService
{
    Task<Result<List<ContactVm>>> GetContacts();

    Task<Result<ContactVm?>> GetById(int id);

    Task<Result<ContactVm?>> PutContact(int id, ContactCreateRequest request);
}