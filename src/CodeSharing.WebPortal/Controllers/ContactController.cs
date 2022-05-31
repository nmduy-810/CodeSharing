using System.Security.Claims;
using CodeSharing.ViewModels.Contents.Support;
using CodeSharing.WebPortal.Extensions;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class ContactController : Controller
{
    private readonly IContactApiClient _contactApiClient;
    private readonly IUserApiClient _userApiClient;
    
    public ContactController(IContactApiClient contactApiClient, IUserApiClient userApiClient)
    {
        _contactApiClient = contactApiClient;
        _userApiClient = userApiClient;
    }
    
    public async Task<IActionResult> Index()
    {
        var contact = await _contactApiClient.GetById(1);
        var items = new ContactViewModel()
        {
            Contact = contact
        };
        
        var user = User as ClaimsPrincipal;
        if (user?.Identity != null && user.Identity.IsAuthenticated)
        {
            items.CurrentUser = await _userApiClient.GetById(user.GetUserId());
        }
        
        return View(items);
    }

    [HttpPost]
    public async Task<IActionResult> Index(string name, string email, string subject, string message)
    {
        var request = new SupportCreateRequest()
        {
            Name = name,
            Email = email,
            Subject = subject,
            Message = message
        };

        var result = await _contactApiClient.PostSupport(request);
        return RedirectToAction("Index", "Home");
    }
}