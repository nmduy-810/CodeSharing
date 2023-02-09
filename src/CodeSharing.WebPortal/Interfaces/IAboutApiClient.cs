using CodeSharing.DTL.Models.Contents.About;

namespace CodeSharing.WebPortal.Interfaces;

public interface IAboutApiClient
{
    Task<AboutVm> GetById(int id);
}