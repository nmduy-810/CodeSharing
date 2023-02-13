using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Commons;
using CodeSharing.DTL.Models.Contents.Support;

namespace CodeSharing.Server.Services.Interfaces;

public interface ISupportService
{
    Task<Result<SupportVm?>> PostSupport(SupportCreateRequest request);
}