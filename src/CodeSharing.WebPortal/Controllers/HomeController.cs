using System.Diagnostics;
using CodeSharing.ViewModels.Contents.Category;
using CodeSharing.WebPortal.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CodeSharing.WebPortal.Models;

namespace CodeSharing.WebPortal.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IPostApiClient _postApiClient;

    public HomeController(ILogger<HomeController> logger, IPostApiClient postApiClient)
    {
        _logger = logger;
        _postApiClient = postApiClient;
    }

    public async Task<IActionResult> Index()
    {
        var latestPosts = await _postApiClient.GetLatestPosts(10);
        var popularPosts = await _postApiClient.GetPopularPosts(10);

        var items = new HomeViewModel()
        {
            LatestPosts = latestPosts,
        };
        
        return View(items);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}