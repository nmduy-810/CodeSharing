using CodeSharing.DTL.Models.Contents.About;

namespace CodeSharing.Portal.Interfaces;

public interface IAboutApiClient
{
    Task<AboutVm> GetById(int id);
}