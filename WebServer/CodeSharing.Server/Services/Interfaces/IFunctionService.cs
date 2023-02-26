using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Systems.Function;

namespace CodeSharing.Server.Services.Interfaces;

public interface IFunctionService
{
    Task<Result<List<FunctionVm>>> GetFunctions();

    Task<Result<FunctionVm?>> GetById(string id);

    Task<Result<List<FunctionVm>>> GetFunctionsByParentId(string functionId);
}