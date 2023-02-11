using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;

namespace CodeSharing.Infrastructure.EFCore.Repositories.About;

public interface IAboutRepository : ICoreRepository<CdsAbout>
{
    Task<List<CdsAbout>> GetAbouts();
    Task<CdsAbout?> GetById(int id);
    Task<CdsAbout?> PostAbout(CdsAbout about);
    Task<CdsAbout?> PutAbout(CdsAbout about);
    Task<CdsAbout?> DeleteAbout(CdsAbout about);
}