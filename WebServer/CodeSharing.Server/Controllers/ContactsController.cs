using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Contents.Support;
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
        return CodeSharingResult(await _contactService.GetContacts());
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        return CodeSharingResult(await _contactService.GetById(id));
    }

    [AllowAnonymous]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> PutContact(int id, ContactCreateRequest request)
    {
        return CodeSharingResult(await _contactService.PutContact(id, request));
    }
    
    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> PostSupport([FromBody] SupportCreateRequest request)
    {
        return CodeSharingResult(await _supportService.PostSupport(request));
    }
}