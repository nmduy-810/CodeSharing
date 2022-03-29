using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers.Components;

public class SideBarViewComponent : ViewComponent
{
    private readonly IPostApiClient _postApiClient;
    public SideBarViewComponent(IPostApiClient postApiClient)
    {
        _postApiClient = postApiClient;
    }
    
    public async Task<IViewComponentResult> InvokeAsync()
    {
        var popularPosts = await _postApiClient.GetPopularPosts(3);
        var items = new SideBarViewModel()
        {
            PopularPosts = popularPosts
        };

        return View("Default", items);
    }
}