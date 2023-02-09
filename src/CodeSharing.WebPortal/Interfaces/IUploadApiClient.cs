using CodeSharing.DTL.Models.Commons;

namespace CodeSharing.WebPortal.Interfaces;

public interface IUploadApiClient
{
    Task<UploadImageVm?> UploadImage(IFormFile? upload);
}