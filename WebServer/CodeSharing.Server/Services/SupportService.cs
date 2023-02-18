using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Models.Commons;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Support;
using CodeSharing.Infrastructure.EFCore.Repositories.Support;

namespace CodeSharing.Server.Services;

public class SupportService : BaseService, ISupportService
{
    private readonly ISupportRepository _repository;

    public SupportService(ISupportRepository repository, IUtils utils) : base(utils)
    {
        _repository = repository;
    }
    public async Task<Result<SupportVm?>> PostSupport(SupportCreateRequest request)
    {
        
        var result = new Result<SupportVm?>();
        try
        {
            var item = new CdsSupport
            {
                Name = request.Name,
                Email = request.Email,
                Message = request.Message,
                Subject = request.Subject
            };
            
            var data = await _repository.PostSupport(item);
            if (data != null)
                result.SetResult(_utils.Transform<CdsSupport, SupportVm>(data));
            else
                result.SetResult(null, ErrorCodeConstant.MessageCode.ErrorProcessCreate);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }
}