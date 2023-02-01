using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server.Services.Interfaces;

public interface IAboutService
{
    Task<Result<List<AboutVm>>> GetAbouts();

    Task<Result<AboutVm?>> GetById(int id);

    Task<Result<AboutVm>> PostAbout(AboutCreateRequest request);

    Task<bool> PutAbout(int id, AboutCreateRequest request);

    Task<bool> DeleteAbout(int id);
}