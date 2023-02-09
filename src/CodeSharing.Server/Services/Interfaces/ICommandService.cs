using CodeSharing.DTL.Models.Systems.Command;

namespace CodeSharing.Server.Services.Interfaces;

public interface ICommandService
{
    Task< List<CommandVm>> GetCommands();
}