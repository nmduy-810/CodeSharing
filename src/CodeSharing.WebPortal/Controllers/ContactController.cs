using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class ContactController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}