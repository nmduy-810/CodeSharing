using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class AboutsController : BaseController
{
    private readonly IAboutService _aboutService;

    public AboutsController(IAboutService aboutService)
    {
        _aboutService = aboutService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetAbouts()
    {
        var result = await _aboutService.GetAbouts();
        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var about = await _aboutService.GetById(id);
        if (about == null) 
            return NotFound(new ApiNotFoundResponse($"Not found ABOUT item for id = {id} in database"));
        
        return Ok(about);
    }

    [AllowAnonymous]
    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> PostAbout([FromForm] AboutCreateRequest request)
    {
        var result = await _aboutService.PostAbout(request);
        if (result)
            return Ok(result);

        return BadRequest(new ApiBadRequestResponse("Insert ABOUT failed"));
    }

    [HttpPut("{id:int}")]
    [Consumes("multipart/form-data")]
    [AllowAnonymous]
    public async Task<IActionResult> PutAbout([FromRoute] int id, [FromForm] AboutCreateRequest request)
    {
        var result = await _aboutService.PutAbout(id, request);
        if (result) 
            return NoContent();
        
        return BadRequest(new ApiBadRequestResponse("Update ABOUT failed"));
    }
}