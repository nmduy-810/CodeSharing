using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Contact;
using CodeSharing.ViewModels.Contents.Support;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class ContactsController : BaseController
{
    private readonly IContactService _contactService;
    private readonly ISupportService _supportService;

    public ContactsController(IContactService contactService, ISupportService supportService)
    {
        _contactService = contactService;
        _supportService = supportService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetContacts()
    {
        var result = await _contactService.GetContacts();
        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _contactService.GetById(id);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found CONTACT item for id = {id} in database"));
        
        return Ok(result);
    }

    [AllowAnonymous]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> PutContact(int id, ContactCreateRequest request)
    {
        var result = await _contactService.PutContact(id, request);
        if (result)
            return NoContent();

        return BadRequest(new ApiBadRequestResponse("Update CONTACT failed"));
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> PostSupport([FromBody] SupportCreateRequest request)
    {
        var result = await _supportService.PostSupport(request);
        if (result)
            return Ok(result);

        return BadRequest(new ApiBadRequestResponse("Insert SUPPORT failed"));
    }
}