using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Contents.Contact;

namespace CodeSharing.Server.Services;

public class ContactService : IContactService
{
    private readonly IContactRepository _repository;

    public ContactService(IContactRepository repository)
    {
        _repository = repository;
    }
    public async Task<List<ContactVm>> GetContacts()
    {
        var result = await _repository.GetContacts();
        return result;
    }

    public async Task<ContactVm?> GetById(int id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<bool> PutContact(int id, ContactCreateRequest request)
    {
        return await _repository.PutContact(id, request);
    }
}