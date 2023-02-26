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
        return CodeSharingResult(await _roleService.GetRoles());
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_ROLE, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        return CodeSharingResult(await _roleService.GetById(id));
    }
}