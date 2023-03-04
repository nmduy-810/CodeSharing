using CodeSharing.Portal.Interfaces;
using CodeSharing.Portal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Controllers.Components;

public class WidgetCategoryViewComponent : ViewComponent
{
    private readonly IPostApiClient _postApiClient;
    
    public WidgetCategoryViewComponent(IPostApiClient postApiClient)
    {
        _postApiClient = postApiClient;
    }
    
    public async Task<IViewComponentResult> InvokeAsync(string componentView = "Default")
    {
        var explorerTopics = await _postApiClient.GetTotalPostInCategory();

        var items = new WidgetCategoryViewModel
        {
            ExplorerTopics = explorerTopics.Data
        };

        return View("Default", items);
    }
}