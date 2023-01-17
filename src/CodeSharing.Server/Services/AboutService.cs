using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server.Services;

public class AboutService : IAboutService
{
    private readonly IAboutRepository _repository;
    public AboutService(IAboutRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<AboutVm>> GetAbouts() => await _repository.GetAbouts();

    public async Task<AboutVm?> GetById(int id) => await _repository.GetById(id);

    public async Task<bool> PostAbout(AboutCreateRequest request) => await _repository.PostAbout(request);

    public async Task<bool> PutAbout(int id, AboutCreateRequest request) => await _repository.PutAbout(id, request);

    public async Task<bool> DeleteAbout(int id) => await _repository.DeleteAbout(id);
}