using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IAboutRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<AboutVm>> GetAbouts();

    Task<AboutVm?> GetById(int id);
    
    Task<bool> PostAbout(AboutCreateRequest request);

    Task<bool> PutAbout(int id, AboutCreateRequest request);

    Task<bool> DeleteAbout(int id);
}