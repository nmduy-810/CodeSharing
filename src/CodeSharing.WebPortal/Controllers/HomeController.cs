using System.Diagnostics;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class HomeController : Controller
{
    private readonly IConfiguration _configuration;
    private readonly ILogger<HomeController> _logger;
    private readonly IPostApiClient _postApiClient;

    public HomeController(ILogger<HomeController> logger, IPostApiClient postApiClient, IConfiguration configuration)
    {
        _logger = logger;
        _postApiClient = postApiClient;
        _configuration = configuration;
    }

    public async Task<IActionResult> Index(int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageIndexSize"]);
        var latestPosts = await _postApiClient.GetLatestPostsPaging(page, pageSize);

        var items = new HomeViewModel
        {
            LatestPosts = latestPosts
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