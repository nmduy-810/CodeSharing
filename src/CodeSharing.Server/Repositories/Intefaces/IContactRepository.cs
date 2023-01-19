using CodeSharing.Server.Datas.Entities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IContactRepository : IGenericRepository<Contact, int>
{
    Task<bool> PutContact(Contact contact);
}