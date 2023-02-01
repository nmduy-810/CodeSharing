using CodeSharing.Server.Datas.Entities;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IAboutRepository : ICoreRepository<About>
{
    Task<List<AboutVm>> GetAbouts();
    Task<AboutVm?> GetById(int id);
    Task<About?> PostAbout(About about);
    Task<About?> PutAbout(About about);
    Task<About?> DeleteAbout(About about);
}