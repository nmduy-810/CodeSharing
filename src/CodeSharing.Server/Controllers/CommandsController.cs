using CodeSharing.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class CommandsController : BaseController
{
    private readonly ICommandService _commandService;

    public CommandsController( ICommandService commandService)
    {
        _commandService = commandService;
    }

    [HttpGet]
    public async Task<IActionResult> GetCommands()
    {
        var result = await _commandService.GetCommands();
        return Ok(result);
    }
}