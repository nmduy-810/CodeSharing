using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Contact;
using CodeSharing.Infrastructure.EFCore.Repositories.Contact;

namespace CodeSharing.Server.Services;

public class ContactService : BaseService, IContactService
{
    private readonly IContactRepository _repository;

    public ContactService(IContactRepository repository, IUtils utils) : base(utils)
    {
        _repository = repository;
    }
    public async Task<Result<List<ContactVm>>> GetContacts()
    {
        var result = new Result<List<ContactVm>>();
        try
        {
            var data = await _repository.GetContacts();
            result.SetResult(_utils.Transform<List<CdsContact>, List<ContactVm>>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }

    public async Task<Result<ContactVm?>> GetById(int id)
    {
        var result = new Result<ContactVm?>();
        try
        {
            var data = await _repository.GetById(id);
            if (data == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }
            
            result.SetResult(_utils.Transform<CdsContact, ContactVm>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
    
        return result;
    }

    public async Task<Result<ContactVm?>> PutContact(int id, ContactCreateRequest request)
    {
        var result = new Result<ContactVm?>();
        try
        {
            var contact = await _repository.FindByIdAsync(id);
            if (contact == null)
            {
                result.SetResult(null, ErrorCodeConstant.MessageCode.ItemNotFound);
                return result;
            }

            contact.Phone = request.Phone;
            contact.Email = request.Email;
            contact.Location = request.Location;
            
            var data = await _repository.PutContact(contact);
            if (data != null)
                result.SetResult(_utils.Transform<CdsContact, ContactVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessUpdate);

        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        
        return result;
    }
}