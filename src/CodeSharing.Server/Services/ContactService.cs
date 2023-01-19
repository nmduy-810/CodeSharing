using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Contents.Contact;
using Microsoft.EntityFrameworkCore;

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
        var items = await _repository.FindAll().Select(x => new ContactVm
        {
            Id = x.Id,
            Phone = x.Phone,
            Location = x.Location,
            Email = x.Email
        }).ToListAsync();

        return items;
    }

    public async Task<ContactVm?> GetById(int id)
    {
        var contact = await _repository.GetByIdAsync(id);
        if (contact == null)
            return null;

        var items = new ContactVm
        {
            Id = contact.Id,
            Phone = contact.Phone,
            Email = contact.Email,
            Location = contact.Location
        };

        return items;
    }

    public async Task<bool> PutContact(int id, ContactCreateRequest request)
    {
        var contact = await _repository.GetByIdAsync(id);
        if (contact == null)
            return false;
        
        contact.Phone = request.Phone;
        contact.Email = request.Email;
        contact.Location = request.Location;
        
        return await _repository.PutContact(contact);
    }
}