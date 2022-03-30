using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers.Components;

public class SideBarViewComponent : ViewComponent
{
    private readonly IPostApiClient _postApiClient;
    private readonly ILabelApiClient _labelApiClient;
    public SideBarViewComponent(IPostApiClient postApiClient, ILabelApiClient labelApiClient)
    {
        _postApiClient = postApiClient;
        _labelApiClient = labelApiClient;
    }
    
    public async Task<IViewComponentResult> InvokeAsync()
    {
        var popularPosts = await _postApiClient.GetPopularPosts(3);
        var popularLabels = await _labelApiClient.GetPopularLabels(5);
        var items = new SideBarViewModel()
        {
            PopularPosts = popularPosts,
            PopularLabels = popularLabels
        };

        return View("Default", items);
    }
}