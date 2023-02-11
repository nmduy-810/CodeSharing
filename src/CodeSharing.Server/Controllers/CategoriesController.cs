using CodeSharing.Core.Resources.Constants;
using CodeSharing.DTL.Models.Contents.Category;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
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
        return CodeSharingResult(await _categoryService.GetCategories());
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        return CodeSharingResult(await _categoryService.GetById(id));
    }

    [HttpPost]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_CATEGORY, CommandCodeEnum.CREATE)]
    [ApiValidationFilter]
    public async Task<IActionResult> PostCategory([FromBody] CategoryCreateRequest request)
    {
        return CodeSharingResult(await _categoryService.PostCategory(request));
    }

    [HttpPut("{id:int}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_CATEGORY, CommandCodeEnum.UPDATE)]
    [ApiValidationFilter]
    public async Task<IActionResult> PutCategory([FromRoute] int id, [FromBody] CategoryUpdateRequest request)
    {
        return CodeSharingResult(await _categoryService.PutCategory(id, request));
    }

    [HttpDelete("{id:int}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_CATEGORY, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> DeleteCategory([FromRoute] int id)
    {
        return CodeSharingResult(await _categoryService.DeleteCategory(id));
    }
}