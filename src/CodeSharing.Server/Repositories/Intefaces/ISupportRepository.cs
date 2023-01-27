using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ISupportRepository : IGenericRepository<ApplicationDbContext>
{
    Task<bool> PostSupport(Support support);
}