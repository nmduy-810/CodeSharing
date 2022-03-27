using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class AboutController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}