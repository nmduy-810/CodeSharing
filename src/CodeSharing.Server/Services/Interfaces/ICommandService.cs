using CodeSharing.ViewModels.Systems.Command;

namespace CodeSharing.Server.Services.Interfaces;

public interface ICommandService
{
    Task< List<CommandVm>> GetCommands();
}