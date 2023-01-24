using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Constants;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class RolesController : BaseController
{
    private readonly IRoleService _roleService;

    public RolesController(IRoleService roleService)
    {
        _roleService = roleService;
    }

    [HttpGet]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_ROLE, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetRoles()
    {
        var result = await _roleService.GetRoles();
        return Ok(result);
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeConstants.SYSTEM_ROLE, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var result = await _roleService.GetById(id);
        return Ok(result);
    }
}