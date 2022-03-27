using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Contents.Category;
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
}