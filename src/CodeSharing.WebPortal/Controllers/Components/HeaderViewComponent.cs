using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers.Components;

public class HeaderViewComponent : ViewComponent
{
    private readonly ICategoryApiClient _categoryApiClient;

    public HeaderViewComponent(ICategoryApiClient categoryApiClient)
    {
        _categoryApiClient = categoryApiClient;
    }
    
    public async Task<IViewComponentResult> InvokeAsync(string componentView = "Default")
    {
        var categories = await _categoryApiClient.GetCategories();

        var items = new HeaderViewModel()
        {
            Categories = categories
        };

        return View(componentView, items);
    }
}