using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Label;

namespace CodeSharing.Server.Services;

public class LabelService : ILabelService
{
    private readonly ILabelRepository _repository;
    
    public LabelService(ILabelRepository repository)
    {
        _repository = repository;
    }

    public async Task<Result<List<LabelVm>>> GetLabels()
    {
        var result = new Result<List<LabelVm>>();
        try
        {
            var data = await _repository.GetLabels();
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<LabelVm?>> GetById(string id)
    {
        var result = new Result<LabelVm?>();
        try
        {
            var data = await _repository.GetById(id);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<LabelInPostVm>?>> GetLabelsByPostId(int postId)
    {
        var result = new Result<List<LabelInPostVm>?>();
        try
        {
            var data = await _repository.GetLabelsByPostId(postId);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<LabelVm>>> GetPopularLabels(int take)
    {
        var result = new Result<List<LabelVm>>();
        try
        {
            var data = await _repository.GetPopularLabels(take);
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