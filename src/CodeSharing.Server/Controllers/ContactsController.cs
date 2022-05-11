using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Helpers;
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
    
    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetContacts()
    {
        var items = await _context.Contacts.Select(x => new ContactVm()
        {
            Id = x.Id,
            Phone = x.Phone,
            Location = x.Location,
            Email = x.Email
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get contact request");
        return Ok(items);
    }
    
    [HttpGet("{id:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);
        if (contact == null)
        {
            return NotFound(new ApiNotFoundResponse($"Cannot found contact for id = {id} in database"));
        }

        var items = new ContactVm()
        {
            Id = contact.Id,
            Phone = contact.Phone,
            Email = contact.Email,
            Location = contact.Location
        };

        _logger.LogInformation("Successful execution of get contact id request");
        return Ok(items);
    }

    [HttpPut("{id:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> Update(int id, ContactCreateRequest request)
    {
        var contact = await _context.Contacts.FindAsync(id);
        if (contact == null)
        {
            return NotFound(new ApiNotFoundResponse($"Cannot found contact for id = {id} in database"));
        }
        
        contact.Phone = request.Phone;
        contact.Email = request.Email;
        contact.Location = request.Location;
        
        _context.Contacts.Update(contact);
        
        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return NoContent();
        }
        
        return BadRequest(new ApiBadRequestResponse("Update contact failed"));
    }
}