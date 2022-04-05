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
    
    public RolesController(RoleManager<IdentityRole> roleManager)
    {
        _roleManager = roleManager;
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

        return Ok(items);
    }
    
    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_ROLE, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var role = await _roleManager.FindByIdAsync(id);
        if (role == null)
        {
            return NotFound(new ApiNotFoundResponse($"Role with id: {id} is not found"));
        }

        var items = new RoleVm()
        {
            Id = role.Id,
            Name = role.Name,
        };
        return Ok(items);
    }
}