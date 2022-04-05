using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Contents.Contact;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class ContactsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ContactsController> _logger;

    public ContactsController(ApplicationDbContext context, ILogger<ContactsController> logger)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetContacts()
    {
        var items = await _context.Contacts.Select(x => new ContactVm()
        {
            Phone = x.Phone,
            Location = x.Location,
            Email = x.Email
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get contact request");
        return Ok(items);
    }
}