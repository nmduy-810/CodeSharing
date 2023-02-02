using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Category;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class CategoriesController : BaseController
{
    private readonly ICategoryService _categoryService;

    public CategoriesController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
        var result = await _categoryService.GetCategories();
        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var result = await _categoryService.GetById(id);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found CATEGORY item for id = {id} in database"));
        
        return Ok(result);
    }

    [HttpPost]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_CATEGORY, CommandCodeEnum.CREATE)]
    [ApiValidationFilter]
    public async Task<IActionResult> PostCategory([FromBody] CategoryCreateRequest request)
    {
        var result = await _categoryService.PostCategory(request);
        if (result)
            return Ok(result);

        return BadRequest(new ApiBadRequestResponse("Insert CATEGORY failed"));
    }

    [HttpPut("{id:int}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_CATEGORY, CommandCodeEnum.UPDATE)]
    [ApiValidationFilter]
    public async Task<IActionResult> PutCategory([FromRoute] int id, [FromBody] CategoryUpdateRequest request)
    {
        var result = await _categoryService.PutCategory(id, request);
        if (result)
            return NoContent();

        return BadRequest(new ApiBadRequestResponse("Update CATEGORY failed"));
    }

    [HttpDelete("{id:int}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_CATEGORY, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> DeleteCategory([FromRoute] int id)
    {
        var result = await _categoryService.DeleteCategory(id);
        if (result)
            return Ok(result);
        
        return BadRequest(new ApiBadRequestResponse("Delete CATEGORY failed"));
    }
}