using CodeSharing.Core.Helpers;
using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.About;
using CodeSharing.Infrastructure.EFCore.Repositories.About;

namespace CodeSharing.Server.Services;

public class AboutService : BaseService, IAboutService
{
    private readonly IAboutRepository _repository;
    private readonly IUploadRepository _uploadRepository;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AboutService(IAboutRepository repository, IUploadRepository uploadRepository, IUtils utils, IHttpContextAccessor httpContextAccessor) : base(utils)
    {
        _repository = repository;
        _uploadRepository = uploadRepository;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<Result<List<AboutVm>>> GetAbouts()
    {
        var result = new Result<List<AboutVm>>();
        try
        {
            var data = await _repository.GetAbouts();
            var items = data.Select(x => new AboutVm
            {
                Description = x.Description,
                Image = HttpHelper.GetBaseUrl(_httpContextAccessor) + x.Image,
                Id = x.Id,
            }).ToList();
            result.SetResult(items);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
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
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }

            var aboutVm = new AboutVm()
            {
                Description = data.Description,
                Image = HttpHelper.GetBaseUrl(_httpContextAccessor) + data.Image,
                Id = data.Id
            };
            
            result.SetResult(aboutVm);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
    
        return result;
    }
    
    public async Task<Result<AboutVm?>> PostAbout(AboutCreateRequest request)
    {
        var result = new Result<AboutVm?>();
        try
        {
            var item = new CdsAbout
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
                result.SetResult(_utils.Transform<CdsAbout, AboutVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
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
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
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
                result.SetResult(_utils.Transform<CdsAbout, AboutVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessUpdate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
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
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }

            var data = await _repository.DeleteAbout(about);
            if (data != null)
                result.SetResult(_utils.Transform<CdsAbout, AboutVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessDelete);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
}