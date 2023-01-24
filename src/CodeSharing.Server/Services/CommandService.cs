using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Systems.Command;

namespace CodeSharing.Server.Services;

public class CommandService : ICommandService
{
    private readonly ICommandRepository _repository;

    public CommandService(ICommandRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<CommandVm>> GetCommands()
    {
        var result = await _repository.GetCommands();
        return result;
    }
}