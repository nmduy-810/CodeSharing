using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
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
        var result = await _functionService.GetFunctions();
        return Ok(result);
    }

    [HttpGet("{id}")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_FUNCTION, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetById(string id)
    {
        var result = await _functionService.GetById(id);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found FUNCTION item for id = {id} in database"));
        
        return Ok(result);
    }

    [HttpGet("{functionId}/parents")]
    [ClaimRequirement(FunctionCodeEnum.SYSTEM_FUNCTION, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetFunctionsByParentId(string functionId)
    {
        var result = await _functionService.GetFunctionsByParentId(functionId);
        return Ok(result);
    }
}