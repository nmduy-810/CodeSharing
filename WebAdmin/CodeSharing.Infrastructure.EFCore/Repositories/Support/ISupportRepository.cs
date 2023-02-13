using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Support;

public interface ISupportRepository : ICoreRepository<CdsSupport>
{
    Task<CdsSupport?> PostSupport(CdsSupport support);
}