using CodeSharing.Core.Helpers;
using CodeSharing.Server.AdditionalServices.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

[AllowAnonymous]
public class UploadsController : BaseController
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IStorageService _storageService;

    public UploadsController(IStorageService storageService, IHttpContextAccessor httpContextAccessor)
    {
        _storageService = storageService;
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpPost("UploadImage")]
    public Task<IActionResult> UploadImage(IFormFile upload)
    {
        if (string.IsNullOrEmpty(upload.FileName))
            return Task.FromResult<IActionResult>(BadRequest("Null file"));

        if (upload.Length > 10 * 1024 * 1024)
            return Task.FromResult<IActionResult>(BadRequest("Max file size exceeded."));

        if (upload.Length == 0)
            return Task.FromResult<IActionResult>(BadRequest("Empty file"));

        var fileName = FileHelper.GenerateFileName("Image") + Path.GetExtension(upload.FileName);
        _storageService.SaveFileAsync(upload.OpenReadStream(), fileName);

        var imageUrl = HttpHelper.GetBaseUrl(_httpContextAccessor) + _storageService.GetFileUrl(fileName);

        return Task.FromResult<IActionResult>(Ok(new
        {
            uploaded = true,
            url = imageUrl
        }));
    }
}