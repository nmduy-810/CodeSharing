using System.Net.Http.Headers;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.About;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class AboutsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ILogger<AboutsController> _logger;
    private readonly IStorageService _storageService;

    public AboutsController(ApplicationDbContext context, ILogger<AboutsController> logger,
        IStorageService storageService, IHttpContextAccessor httpContextAccessor)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _storageService = storageService;
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAbouts()
    {
        var items = await _context.Abouts.Select(x => new AboutVm
        {
            Id = x.Id,
            Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + x.Image,
            Description = x.Description
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get contact request");
        return Ok(items);
    }

    [HttpGet("{id:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(int id)
    {
        var about = await _context.Abouts.FindAsync(id);
        if (about == null) return NotFound(new ApiNotFoundResponse($"Cannot found about for id = {id} in database"));

        var items = new AboutVm
        {
            Id = about.Id,
            Image = FunctionBase.GetBaseUrl(_httpContextAccessor) + about.Image,
            Description = about.Description
        };

        _logger.LogInformation("Successful execution of get about id request");
        return Ok(items);
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    [AllowAnonymous]
    public async Task<IActionResult> PostAbout([FromForm] AboutCreateRequest request)
    {
        var item = new About
        {
            Description = request.Description
        };

        // Process Image
        if (request.Image != null)
        {
            var coverImagePath = await SaveFile(request.Image);
            item.Image = coverImagePath;
        }

        _context.Abouts.Add(item);

        var result = await _context.SaveChangesAsync();
        if (result > 0) return CreatedAtAction(nameof(GetById), new { id = item.Id }, request);

        return BadRequest(new ApiBadRequestResponse("Create about failed"));
    }

    [HttpPut("{id:int}")]
    [Consumes("multipart/form-data")]
    [AllowAnonymous]
    public async Task<IActionResult> PutAbout(int id, [FromForm] AboutCreateRequest request)
    {
        var about = await _context.Abouts.FindAsync(id);
        if (about == null)
            return NotFound(new ApiNotFoundResponse($"Cannot found about item for id = {id} in database"));

        // Process Image
        if (request.Image != null)
        {
            var coverImagePath = await SaveFile(request.Image);
            about.Image = coverImagePath;
        }

        about.Description = request.Description;

        _context.Abouts.Update(about);

        var result = await _context.SaveChangesAsync();
        if (result > 0) return NoContent();
        return BadRequest(new ApiBadRequestResponse("Update about failed"));
    }

    #region Helpers

    private async Task<string> SaveFile(IFormFile file)
    {
        var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName?.Trim('"');
        var fileName = FunctionBase.GenerateFileName("Image") + Path.GetExtension(originalFileName);
        await _storageService.SaveFileAsync(file.OpenReadStream(), fileName);
        var filePath = _storageService.GetFileUrl(fileName);
        return filePath;
    }

    #endregion Helpers
}