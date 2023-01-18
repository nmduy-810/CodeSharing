using CodeSharing.Server.Datas.Entities;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IAboutRepository : IGenericRepository<About, int>
{
    Task<bool> PostAbout(About about);

    Task<bool> PutAbout(About about);

    Task<bool> DeleteAbout(About about);
}