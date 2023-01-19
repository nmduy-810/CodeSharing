using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;

namespace CodeSharing.Server.Repositories;

public class ContactRepository : GenericRepository<Contact, int>, IContactRepository
{
    private readonly ILogger<ContactRepository> _logger;
    
    public ContactRepository(ApplicationDbContext context, ILogger<ContactRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public async Task<bool> PutContact(Contact contact)
    {
        try
        {
            await UpdateAsync(contact);
            var result = await SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}