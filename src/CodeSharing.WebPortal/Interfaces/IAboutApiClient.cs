using CodeSharing.ViewModels.Contents.About;

namespace CodeSharing.WebPortal.Interfaces;

public interface IAboutApiClient
{
    Task<AboutVm> GetById(int id);
}