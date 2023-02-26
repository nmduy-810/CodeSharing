using System.Diagnostics;
using CodeSharing.DTL.Models.Commons;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class HomeController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorVm { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}