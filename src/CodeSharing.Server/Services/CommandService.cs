using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Core.Services.Utils;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Systems.Command;
using CodeSharing.Infrastructure.EFCore.Repositories.Command;

namespace CodeSharing.Server.Services;

public class CommandService : BaseService, ICommandService
{
    private readonly ICommandRepository _repository;

    public CommandService(ICommandRepository repository, IUtils utils) : base(utils)
    {
        _repository = repository;
    }

    public async Task<Result<List<CommandVm>>> GetCommands()
    {
        var result = new Result<List<CommandVm>>();
        try
        {
            var data = await _repository.GetCommands();
            result.SetResult(_utils.Transform<List<CdsCommand>, List<CommandVm>>(data));
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }

        return result;
    }
}