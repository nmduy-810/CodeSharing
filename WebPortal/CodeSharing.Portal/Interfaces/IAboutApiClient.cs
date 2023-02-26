using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Contents.About;

namespace CodeSharing.Portal.Interfaces;

public interface IAboutApiClient
{
    Task<Result<AboutVm>> GetById(int id);
}