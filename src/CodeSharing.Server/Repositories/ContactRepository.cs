using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Contents.Contact;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class ContactRepository : GenericRepository<ApplicationDbContext>, IContactRepository
{
    private readonly ILogger<ContactRepository> _logger;
    
    public ContactRepository(ApplicationDbContext context, ILogger<ContactRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public async Task<List<ContactVm>> GetContacts()
    {
        var items = await _context.Contacts.Select(x => new ContactVm
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
        var contact = await _context.Contacts.FindAsync(id);
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
        try
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact == null)
                return false;
        
            contact.Phone = request.Phone;
            contact.Email = request.Email;
            contact.Location = request.Location;
            
            _context.Contacts.Update(contact);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}