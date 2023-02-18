using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Command;

public interface ICommandRepository : ICoreRepository<CdsCommand>
{
    Task<List<CdsCommand>> GetCommands();
}