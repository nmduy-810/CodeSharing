namespace CodeSharing.Server.Services.Interfaces;

public interface ISequenceService
{
    Task<int> GetPostNewId();
}