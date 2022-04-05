using CodeSharing.Server.Authorization;
using CodeSharing.Utilities.Constants;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Systems.Role;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class RolesController : BaseController
{
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ILogger<RolesController> _logger;
    
    public RolesController(RoleManager<IdentityRole> roleManager, ILogger<RolesController> logger)
    {
        _roleManager = roleManager;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }
    
    [HttpGet]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_ROLE, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetRoles()
    {
        var items = await _roleManager.Roles
            .Select(r => new RoleVm()
        {
            Id = r.Id,
            Name = r.Name
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get roles request");
        return Ok(items);
    }
    
    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_ROLE, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var role = await _roleManager.FindByIdAsync(id);
        if (role == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found role item for id = {id} in database"));
        }

        var items = new RoleVm()
        {
            Id = role.Id,
            Name = role.Name,
        };
        
        _logger.LogInformation("Successful execution of get role by id request");
        return Ok(items);
    }
}