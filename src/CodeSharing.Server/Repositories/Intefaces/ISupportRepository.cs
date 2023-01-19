using CodeSharing.Server.Datas.Entities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ISupportRepository : IGenericRepository<Support, int>
{
    Task<bool> PostSupport(Support support);
}