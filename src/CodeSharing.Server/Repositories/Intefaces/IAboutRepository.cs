using CodeSharing.Server.Datas.Entities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IAboutRepository : ICoreRepository<About>
{
    Task<List<About>> GetAbouts();
    Task<About?> GetById(int id);
    Task<About?> PostAbout(About about);
    Task<About?> PutAbout(About about);
    Task<About?> DeleteAbout(About about);
}