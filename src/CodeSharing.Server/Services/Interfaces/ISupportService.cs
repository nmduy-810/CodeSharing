using CodeSharing.ViewModels.Contents.Support;

namespace CodeSharing.Server.Services.Interfaces;

public interface ISupportService
{
    Task<bool> PostSupport(SupportCreateRequest request);
}