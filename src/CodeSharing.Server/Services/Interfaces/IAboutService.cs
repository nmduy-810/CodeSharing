using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.About;

namespace CodeSharing.Server.Services.Interfaces;

public interface IAboutService
{
    Task<Result<List<AboutVm>>> GetAbouts();
    Task<Result<AboutVm?>> GetById(int id);
    Task<Result<AboutVm?>> PostAbout(AboutCreateRequest request);
    Task<Result<AboutVm?>> PutAbout(int id, AboutCreateRequest request);
    Task<Result<AboutVm?>> DeleteAbout(int id);
}