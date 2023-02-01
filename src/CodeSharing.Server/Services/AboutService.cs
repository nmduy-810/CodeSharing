using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.Server.Services;

public class AboutService : IAboutService
{
    private readonly IAboutRepository _repository;
    private readonly IUploadRepository _uploadRepository;
    
    public AboutService(IAboutRepository repository, IUploadRepository uploadRepository)
    {
        _repository = repository;
        _uploadRepository = uploadRepository;
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
    
    public async Task<Result<AboutVm?>> PostAbout(AboutCreateRequest request)
    {
        var result = new Result<AboutVm?>();
        try
        {
            var item = new About
            {
                Description = request.Description
            };
        
            if (request.Image != null)
            {
                var coverImagePath = await _uploadRepository.SaveFile(request.Image);
                item.Image = coverImagePath;
            }

            var data = await _repository.PostAbout(item);
            if (data != null)
            {
                var aboutVm = new AboutVm() { Id = data.Id, Description = data.Description, Image = data.Image };
                result.SetResult(aboutVm);
            }
            else
                result.SetResult(null, ErrorCodes.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodes.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
    
    public async Task<Result<AboutVm?>> PutAbout(int id, AboutCreateRequest request)
    {
        var result = new Result<AboutVm?>();
        try
        {
            var about = await _repository.FindByIdAsync(id);
            if (about == null)
            {
                result.SetResult(null, ErrorCodes.MessageCode.ItemNotFound);
                return result;
            }
            
            if (request.Image != null)
            {
                var coverImagePath = await _uploadRepository.SaveFile(request.Image);
                about.Image = coverImagePath;
            }
    
            about.Description = request.Description;
            
            var data = await _repository.PutAbout(about);
            if (data != null)
            {
                var aboutVm = new AboutVm() { Id = data.Id, Description = data.Description, Image = data.Image };
                result.SetResult(aboutVm);
            }
            else
                result.SetResult(null, ErrorCodes.MessageCode.ErrorProcessUpdate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodes.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }
    
    public async Task<Result<AboutVm?>> DeleteAbout(int id)
    {
        var result = new Result<AboutVm?>();
        try
        {
            var about = await _repository.FindByIdAsync(id);
            if (about == null)
            {
                result.SetResult(null, ErrorCodes.MessageCode.ItemNotFound);
                return result;
            }

            var data = await _repository.DeleteAbout(about);
            if (data != null)
            {
                var aboutVm = new AboutVm() { Id = data.Id, Description = data.Description, Image = data.Image };
                result.SetResult(aboutVm);
            }
            else
                result.SetResult(null, ErrorCodes.MessageCode.ErrorProcessDelete);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodes.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
}