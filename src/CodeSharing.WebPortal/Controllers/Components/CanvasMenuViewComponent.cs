using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers.Components;

public class CanvasMenuViewComponent : ViewComponent
{
    private readonly ICategoryApiClient _categoryApiClient;
    
    public CanvasMenuViewComponent(ICategoryApiClient categoryApiClient)
    {
        _categoryApiClient = categoryApiClient;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var categories = await _categoryApiClient.GetCategories();
        var items = new CanvasMenuViewModel()
        {
            Categories = categories
        };

        return View("Default", items);
    }
}