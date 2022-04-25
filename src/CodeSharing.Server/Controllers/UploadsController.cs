using CodeSharing.Utilities.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

[AllowAnonymous]
public class UploadsController : BaseController
{
    [HttpPost("UploadImage")]
    public Task<IActionResult> UploadImage(IFormFile upload)
    {
        if (string.IsNullOrEmpty(upload.FileName)) 
            return Task.FromResult<IActionResult>(BadRequest("Null file"));
        
        if (upload.Length > 10 * 1024 * 1024) 
            return Task.FromResult<IActionResult>(BadRequest("Max file size exceeded."));
        
        if (upload.Length == 0) 
            return Task.FromResult<IActionResult>(BadRequest("Empty file"));
        
        var fileName = Guid.NewGuid() + Path.GetExtension(upload.FileName);
        
        var imageBase64 = FunctionBase.ConvertToBase64(upload);
        AmazonS3Helper.UploadImage(fileName, imageBase64, out var imageUrl);
        
        return Task.FromResult<IActionResult>(Ok(new
        {
            uploaded = true,
            url = AmazonS3Helper.GetPresignedUrl(imageUrl)
        }));
    }
}