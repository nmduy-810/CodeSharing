using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.Models.Contents.CoverImage;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;

namespace CodeSharing.Server.Services;

public class CoverImageService : BaseService, ICoverImageService
{
    private readonly ICoverImageRepository _repository;
    public CoverImageService(IUtils utils, ICoverImageRepository repository) : base(utils)
    {
        _repository = repository;
    }
    
    public async Task<Result<List<CoverImageVm>>> GetCoverImages()
    {
        var result = new Result<List<CoverImageVm>>();
        try
        {
            var data = await _repository.GetCoverImages();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
    
    public async Task<Result<CoverImageVm>> GetCoverImageById(int id)
    {
        var result = new Result<CoverImageVm>();
        try
        {
            var data = await _repository.GetCoverImageById(id);
            if (data != null)
                result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
}