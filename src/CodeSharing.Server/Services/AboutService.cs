using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server.Services;

public class AboutService : IAboutService
{
    private readonly IAboutRepository _repository;
    
    public AboutService(IAboutRepository repository)
    {
        _repository = repository;
    }

    public async Task<Result<List<AboutVm>>> GetAbouts()
    {
        var result = new Result<List<AboutVm>>();
        try
        {
            var data = await _repository.GetAbouts();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodes.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<AboutVm?>> GetById(int id)
    {
        var result = new Result<AboutVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
                result.SetResult(null, ErrorCodes.MessageCode.ItemNotFound);
            
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodes.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }

    public async Task<Result<AboutVm>> PostAbout(AboutCreateRequest request)
    {
        var result = new Result<AboutVm>();
        try
        {
            var data = await _repository.PostAbout(request);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodes.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
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