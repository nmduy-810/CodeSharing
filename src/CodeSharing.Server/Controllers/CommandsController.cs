using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Systems.Command;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class CommandsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<CommandsController> _logger;

    public CommandsController(ApplicationDbContext context, ILogger<CommandsController> logger)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    [HttpGet]
    public async Task<IActionResult> GetCommands()
    {
        var items = await _context.Commands.Select(u => new CommandVm
        {
            Id = u.Id,
            Name = u.Name
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get commands request");
        return Ok(items);
    }
}