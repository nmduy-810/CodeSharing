using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class FunctionsController : BaseController
{
    private readonly IFunctionService _functionService;

    public FunctionsController(IFunctionService functionService)
    {
        _functionService = functionService;
    }

    [HttpGet]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_FUNCTION, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetFunctions()
    { 
        return CodeSharingResult(await _functionService.GetFunctions());
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_FUNCTION, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        return CodeSharingResult(await _functionService.GetById(id));
    }

    [HttpGet("{functionId}/parents")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_FUNCTION, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetFunctionsByParentId(string functionId)
    { 
        return CodeSharingResult(await _functionService.GetFunctionsByParentId(functionId));
    }
}