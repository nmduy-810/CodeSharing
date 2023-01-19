using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Systems.Function;
using Microsoft.EntityFrameworkCore;

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
        var items = await _repository.FindAll().Select(u => new FunctionVm
        {
            Id = u.Id,
            Name = u.Name,
            Url = u.Url,
            SortOrder = u.SortOrder,
            ParentId = u.ParentId,
            Icon = u.Icon
        }).ToListAsync();
        
        return items;
    }

    public async Task<FunctionVm?> GetById(string id)
    {
        var function = await _repository.GetByIdAsync(id);
        if (function == null)
            return null;

        var items = new FunctionVm
        {
            Id = function.Id,
            Name = function.Name,
            Url = function.Url,
            SortOrder = function.SortOrder,
            ParentId = function.ParentId,
            Icon = function.Icon
        };
        
        return items;
    }

    public async Task<List<FunctionVm>> GetFunctionsByParentId(string functionId)
    {
        var items = await _repository.FindAll()
            .Where(x => x.ParentId == functionId)
            .Select(u => new FunctionVm
            {
                Id = u.Id,
                Name = u.Name,
                Url = u.Url,
                SortOrder = u.SortOrder,
                ParentId = u.ParentId,
                Icon = u.Icon
            }).ToListAsync();

        return items;
    }
}