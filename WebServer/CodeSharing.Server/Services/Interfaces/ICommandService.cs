using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Systems.Command;

namespace CodeSharing.Server.Services.Interfaces;

public interface ICommandService
{
    Task<Result<List<CommandVm>>> GetCommands();
}