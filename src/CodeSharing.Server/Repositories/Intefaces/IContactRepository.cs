using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Contents.Contact;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IContactRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<ContactVm>> GetContacts();

    Task<ContactVm?> GetById(int id);
    
    Task<bool> PutContact(int id, ContactCreateRequest request);
}