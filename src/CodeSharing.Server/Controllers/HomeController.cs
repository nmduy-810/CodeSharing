using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class HomeController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}