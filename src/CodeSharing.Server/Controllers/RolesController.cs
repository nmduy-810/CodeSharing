using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
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
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_ROLE, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetRoles()
    {
        var result = await _roleService.GetRoles();
        return Ok(result);
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_ROLE, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var result = await _roleService.GetById(id);
        return Ok(result);
    }
}