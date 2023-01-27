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

    public async Task<List<AboutVm>> GetAbouts()
    {
        var result = await _repository.GetAbouts();
        return result;
    }

    public async Task<AboutVm?> GetById(int id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<bool> PostAbout(AboutCreateRequest request)
    {
        var result = await _repository.PostAbout(request);
        return result;
    }

    public async Task<bool> PutAbout(int id, AboutCreateRequest request)
    {
        var result = await _repository.PutAbout(id, request);
        return result;
    }

    public async Task<bool> DeleteAbout(int id)
    {
        var result = await _repository.DeleteAbout(id);
        return result;
    }
}