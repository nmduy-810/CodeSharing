namespace CodeSharing.Server.Repositories.Intefaces;

public interface IUploadRepository
{
    Task<string> SaveFile(IFormFile file);
}