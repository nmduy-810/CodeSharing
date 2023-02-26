using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Contact;

public interface IContactRepository : ICoreRepository<CdsContact>
{
    Task<List<CdsContact>> GetContacts();

    Task<CdsContact?> GetById(int id);

    Task<CdsContact?> PutContact(CdsContact contact);
}