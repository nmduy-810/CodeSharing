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
    public async Task<IActionResult> GetById(string id)
    {
        var role = await _roleManager.FindByIdAsync(id);
        if (role == null)
        {
            return NotFound();
        }

        var items = new RoleVm()
        {
            Id = role.Id,
            Name = role.Name,
        };
        return Ok(items);
    }
}