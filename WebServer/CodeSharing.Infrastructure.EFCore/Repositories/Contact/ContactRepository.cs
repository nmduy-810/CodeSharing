using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Contact;

public class ContactRepository : CoreRepository<CdsContact>, IContactRepository
{
    private readonly ILogger<ContactRepository> _logger;
    
    public ContactRepository(ApplicationDbContext context, ILogger<ContactRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public async Task<List<CdsContact>> GetContacts()
    {
        try
        {
            return await FindAll().ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<CdsContact>();
        }
    }

    public async Task<CdsContact?> GetById(int id)
    {
        try
        {
            var contact = await FindByIdAsync(id);
            return contact ?? null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }

    public async Task<CdsContact?> PutContact(CdsContact contact)
    {
        try
        {
            var entity = UpdateAsync(contact);
            return await SaveChangesAsync() > 0 ? entity : null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
}