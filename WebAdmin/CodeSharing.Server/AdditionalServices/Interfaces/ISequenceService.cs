namespace CodeSharing.Server.AdditionalServices.Interfaces;

public interface ISequenceService
{
    Task<int> GetPostNewId();
}