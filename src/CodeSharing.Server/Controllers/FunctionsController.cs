using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Systems.Function;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class FunctionsController : BaseController
{
    private readonly ApplicationDbContext _context;
    
    public FunctionsController(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_FUNCTION, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetFunctions()
    {
        var items = await _context.Functions.Select(u => new FunctionVm()
        {
            Id = u.Id,
            Name = u.Name,
            Url = u.Url,
            SortOrder = u.SortOrder,
            ParentId = u.ParentId,
            Icon = u.Icon
        }).ToListAsync();

        return Ok(items);
    }
    
    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_FUNCTION, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var function = await _context.Functions.FindAsync(id);
        if (function == null)
        {
            return NotFound();
        }
        
        var items = new FunctionVm()
        {
            Id = function.Id,
            Name = function.Name,
            Url = function.Url,
            SortOrder = function.SortOrder,
            ParentId = function.ParentId,
            Icon = function.Icon
        };
        return Ok(items);
    }
    
    [HttpGet("{functionId}/parents")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_FUNCTION, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetFunctionsByParentId(string functionId)
    {
        var items = await _context.Functions
            .Where(x => x.ParentId == functionId)
            .Select(u => new FunctionVm()
        {
            Id = u.Id,
            Name = u.Name,
            Url = u.Url,
            SortOrder = u.SortOrder,
            ParentId = u.ParentId,
            Icon = u.Icon
        }).ToListAsync();

        return Ok(items);
    }
}