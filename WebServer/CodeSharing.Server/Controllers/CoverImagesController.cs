using CodeSharing.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class CoverImagesController : BaseController
{
    private readonly ICoverImageService _coverImageService;
        
    public CoverImagesController(ICoverImageService coverImageService)
    {
        _coverImageService = coverImageService;
    }
    
    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetCoverImages()
    {
        return CodeSharingResult(await _coverImageService.GetCoverImages());
    }
    
    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetCoverImageById([FromRoute] int id)
    {
        return CodeSharingResult(await _coverImageService.GetCoverImageById(id));
    }
}