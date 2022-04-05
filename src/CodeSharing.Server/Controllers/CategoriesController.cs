using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Constants;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Category;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class CategoriesController : BaseController
{
    private readonly ApplicationDbContext _context;

    public CategoriesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
        var items = await _context.Categories.Select(x => new CategoryVm()
        {
            Id = x.Id,
            ParentCategoryId = x.ParentCategoryId,
            Title = x.Title,
            Slug = x.Slug,
            SortOrder = x.SortOrder,
            IsParent = x.IsParent
        }).OrderBy(x => x.SortOrder).ToListAsync();

        return Ok(items);
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound(new ApiNotFoundResponse($"Category with id: {id} is not found"));
        }

        var items = new CategoryVm()
        {
            Id = category.Id,
            ParentCategoryId = category.ParentCategoryId,
            Title = category.Title,
            Slug = category.Slug,
            SortOrder = category.SortOrder,
            IsParent = category.IsParent
        };

        return Ok(items);
    }

    [HttpPost]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_CATEGORY, CommandCodeConstants.CREATE)]
    public async Task<IActionResult> PostCategory([FromBody] CategoryCreateRequest request)
    {
        var item = new Category()
        {
            ParentCategoryId = request.ParentCategoryId,
            Title = request.Title,
            Slug = request.Slug,
            SortOrder = request.SortOrder,
            IsParent = request.IsParent
        };
        _context.Categories.Add(item);

        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return CreatedAtAction(nameof(GetById), new { id = item.Id }, request);
        }

        return BadRequest(new ApiBadRequestResponse("Create category failed"));
    }
}