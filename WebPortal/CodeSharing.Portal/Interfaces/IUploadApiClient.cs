using CodeSharing.DTL.Models.Commons;

namespace CodeSharing.Portal.Interfaces;

public interface IUploadApiClient
{
    Task<UploadImageVm?> UploadImage(IFormFile? upload);
}