using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Systems.Function;

namespace CodeSharing.Server.Services;

public class FunctionService : IFunctionService
{
    private readonly IFunctionRepository _repository;

    public FunctionService(IFunctionRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<FunctionVm>> GetFunctions()
    {
        var result = await _repository.GetFunctions();
        return result;
    }

    public async Task<FunctionVm?> GetById(string id)
    {
        var result = await _repository.GetById(id);
        return result;
    }

    public async Task<List<FunctionVm>> GetFunctionsByParentId(string functionId)
    {
        var result = await _repository.GetFunctionsByParentId(functionId);
        return result;
    }
}