using CodeSharing.Portal.Interfaces;
using CodeSharing.Portal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Controllers.Components;

public class SideBarViewComponent : ViewComponent
{
    private readonly ILabelApiClient _labelApiClient;
    private readonly IPostApiClient _postApiClient;

    public SideBarViewComponent(IPostApiClient postApiClient, ILabelApiClient labelApiClient)
    {
        _postApiClient = postApiClient;
        _labelApiClient = labelApiClient;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var popularPosts = await _postApiClient.GetPopularPosts(5);
        var latestPosts = await _postApiClient.GetLatestPosts(4);
        var trendingPosts = await _postApiClient.GetTrendingPosts(4);
        var popularLabels = await _labelApiClient.GetPopularLabels(5);
        var explorerTopics = await _postApiClient.GetTotalPostInCategory();
        var items = new SideBarViewModel
        {
            PopularPosts = popularPosts,
            LatestPosts = latestPosts,
            TrendingPosts = trendingPosts,
            PopularLabels = popularLabels,
            ExplorerTopics = explorerTopics
        };

        return View("Default", items);
    }
}