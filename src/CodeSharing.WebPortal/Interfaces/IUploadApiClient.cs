using CodeSharing.ViewModels.Commons;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Interfaces;

public interface IUploadApiClient
{
    Task<UploadImageVm?> UploadImage(IFormFile? upload);
}