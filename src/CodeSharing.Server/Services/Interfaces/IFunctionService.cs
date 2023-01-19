using CodeSharing.ViewModels.Systems.Function;

namespace CodeSharing.Server.Services.Interfaces;

public interface IFunctionService
{
    Task<List<FunctionVm>> GetFunctions();

    Task<FunctionVm?> GetById(string id);

    Task<List<FunctionVm>> GetFunctionsByParentId(string functionId);
}