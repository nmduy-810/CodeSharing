using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Systems.Function;
using CodeSharing.Infrastructure.EFCore.Repositories.Function;

namespace CodeSharing.Server.Services;

public class FunctionService : BaseService, IFunctionService
{
    private readonly IFunctionRepository _repository;

    public FunctionService(IFunctionRepository repository, IUtils utils) : base(utils)
    {
        _repository = repository;
    }

    public async Task<Result<List<FunctionVm>>> GetFunctions()
    {
        var result = new Result<List<FunctionVm>>();
        try
        {
            var data = await _repository.GetFunctions();
            result.SetResult(_utils.Transform<List<CdsFunction>, List<FunctionVm>>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }

    public async Task<Result<FunctionVm?>> GetById(string id)
    {
        var result = new Result<FunctionVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            
            result.SetResult(_utils.Transform<CdsFunction, FunctionVm>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
    
        return result;
    }

    public async Task<Result<List<FunctionVm>>> GetFunctionsByParentId(string functionId)
    {
        var result = new Result<List<FunctionVm>>();
        try
        {
            var data = await _repository.GetFunctionsByParentId(functionId);
            result.SetResult(_utils.Transform<List<CdsFunction>, List<FunctionVm>>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }
}