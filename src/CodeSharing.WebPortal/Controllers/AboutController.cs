using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class AboutController : Controller
{
    private readonly IAboutApiClient _aboutApiClient;

    public AboutController(IAboutApiClient aboutApiClient)
    {
        _aboutApiClient = aboutApiClient;
    }
    
    public async Task<IActionResult> Index()
    {
        var about = await _aboutApiClient.GetById(1);
        var items = new AboutViewModel()
        {
            About = about
        };
        
        return View(items);
    }
}