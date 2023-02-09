using CodeSharing.Server.Datas.Provider;
using CodeSharing.DTL.Models.Systems.Command;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface ICommandRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<CommandVm>> GetCommands();
}