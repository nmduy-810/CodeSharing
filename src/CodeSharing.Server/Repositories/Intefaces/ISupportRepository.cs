using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ISupportRepository : IGenericRepository<ApplicationDbContext>
{
    Task<bool> PostSupport(CdsSupport support);
}