using CodeSharing.Portal.Interfaces;
using CodeSharing.Portal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Controllers.Components;

public class CanvasMenuViewComponent : ViewComponent
{
    private readonly ICategoryApiClient _categoryApiClient;

    public CanvasMenuViewComponent(ICategoryApiClient categoryApiClient)
    {
        _categoryApiClient = categoryApiClient;
    }
    
    public async Task<IViewComponentResult> InvokeAsync(string componentView = "Default")
    {
        var categories = await _categoryApiClient.GetCategories();

        var items = new CanvasMenuViewModel
        {
            Categories = categories.Data
        };

        return View(componentView, items);
    }
}