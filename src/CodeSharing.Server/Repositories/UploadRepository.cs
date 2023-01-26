using System.Net.Http.Headers;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Utilities.Helpers;

namespace CodeSharing.Server.Repositories;

public class UploadRepository : IUploadRepository
{
    private readonly IStorageService _storageService;

    public UploadRepository(IStorageService storageService)
    {
        _storageService = storageService;
    }

    public async Task<string> SaveFile(IFormFile file)
    {
        var originalFileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName?.Trim('"');
        var fileName = FunctionBase.GenerateFileName("Image") + Path.GetExtension(originalFileName);
        await _storageService.SaveFileAsync(file.OpenReadStream(), fileName);
        var filePath = _storageService.GetFileUrl(fileName);
        return filePath;
    }
}