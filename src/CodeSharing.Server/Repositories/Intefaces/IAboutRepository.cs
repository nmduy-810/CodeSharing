using CodeSharing.DTL.EFCoreEntities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IAboutRepository : ICoreRepository<CdsAbout>
{
    Task<List<CdsAbout>> GetAbouts();
    Task<CdsAbout?> GetById(int id);
    Task<CdsAbout?> PostAbout(CdsAbout about);
    Task<CdsAbout?> PutAbout(CdsAbout about);
    Task<CdsAbout?> DeleteAbout(CdsAbout about);
}