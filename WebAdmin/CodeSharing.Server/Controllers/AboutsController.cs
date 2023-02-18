using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.About;
using CodeSharing.Server.Services.Interfaces;
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
    [ProducesDefaultResponseType(typeof(Result<List<AboutVm>>))]
    public async Task<IActionResult> GetAbouts()
    {
        return CodeSharingResult(await _aboutService.GetAbouts());
    }

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    [ProducesDefaultResponseType(typeof(Result<AboutVm>))]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        return CodeSharingResult(await _aboutService.GetById(id));
    }
    
    [AllowAnonymous]
    [HttpPost]
    [Consumes("multipart/form-data")]
    [ProducesDefaultResponseType(typeof(Result<AboutVm>))]
    public async Task<IActionResult> PostAbout([FromForm] AboutCreateRequest request)
    {
        return CodeSharingResult(await _aboutService.PostAbout(request));
    }
    
    [AllowAnonymous]
    [HttpPut("{id:int}")]
    [Consumes("multipart/form-data")]
    [ProducesDefaultResponseType(typeof(Result<AboutVm>))]
    public async Task<IActionResult> PutAbout([FromRoute] int id, [FromForm] AboutCreateRequest request)
    {
        return CodeSharingResult(await _aboutService.PutAbout(id, request));
    }
    
    [AllowAnonymous]
    [HttpDelete("{id:int}")]
    [ProducesDefaultResponseType(typeof(Result<AboutVm>))]
    public async Task<IActionResult> DeleteAbout([FromRoute] int id)
    {
        return CodeSharingResult(await _aboutService.DeleteAbout(id));
    }
}