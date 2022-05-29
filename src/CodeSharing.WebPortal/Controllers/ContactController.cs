using CodeSharing.ViewModels.Contents.Support;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class ContactController : Controller
{
    private readonly IContactApiClient _contactApiClient;

    public ContactController(IContactApiClient contactApiClient)
    {
        _contactApiClient = contactApiClient;
    }
    
    public async Task<IActionResult> Index()
    {
        var contact = await _contactApiClient.GetById(1);
        var items = new ContactViewModel()
        {
            Contact = contact
        };
        
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