using CodeSharing.ViewModels.Commons;

namespace CodeSharing.WebPortal.Interfaces;

public interface IUploadApiClient
{
    Task<UploadImageVm?> UploadImage(IFormFile? upload);
}