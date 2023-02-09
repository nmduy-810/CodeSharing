using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Systems.Function;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class FunctionRepository : GenericRepository<ApplicationDbContext>, IFunctionRepository
{
    public FunctionRepository(ApplicationDbContext context) : base(context)
    {
    }

    public async Task<List<FunctionVm>> GetFunctions()
    {
        var items = await _context.Functions.Select(u => new FunctionVm
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
        var function = await _context.Functions.FindAsync(id);
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
        var items = await _context.Functions
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