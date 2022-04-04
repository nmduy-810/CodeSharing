using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Systems.Command;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class CommandsController : BaseController
{
    private readonly ApplicationDbContext _context;

    public CommandsController(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetCommands()
    {
        var items = await _context.Commands.Select(u => new CommandVm()
        {
            Id = u.Id,
            Name = u.Name,
        }).ToListAsync();

        return Ok(items);
    }
}