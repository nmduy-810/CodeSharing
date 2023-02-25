using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Commons;
using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.DTL.Models.Contents.Support;

namespace CodeSharing.Portal.Interfaces;

public interface IContactApiClient
{
    Task<Result<ContactVm>> GetById(int id);
    
    Task<Result<SupportVm>> PostSupport(SupportCreateRequest request);
}