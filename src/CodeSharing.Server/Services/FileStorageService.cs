using CodeSharing.Server.Services.Interfaces;

namespace CodeSharing.Server.Services;

public class FileStorageService : IStorageService
{
    private const string UserContentFolderName = "user-attachments";
    private readonly string _userContentFolder;

    public FileStorageService(IWebHostEnvironment webHostEnvironment)
    {
        _userContentFolder = Path.Combine(webHostEnvironment.WebRootPath, UserContentFolderName);
    }

    public string GetFileUrl(string fileName)
    {
        return $"/{UserContentFolderName}/{fileName}";
    }

    public async Task SaveFileAsync(Stream mediaBinaryStream, string fileName)
    {
        if (!Directory.Exists(_userContentFolder))
            Directory.CreateDirectory(_userContentFolder);

        var filePath = Path.Combine(_userContentFolder, fileName);
        await using var output = new FileStream(filePath, FileMode.Create);
        await mediaBinaryStream.CopyToAsync(output);
    }

    public async Task DeleteFileAsync(string fileName)
    {
        var filePath = Path.Combine(_userContentFolder, fileName);
        if (File.Exists(filePath)) await Task.Run(() => File.Delete(filePath));
    }
}