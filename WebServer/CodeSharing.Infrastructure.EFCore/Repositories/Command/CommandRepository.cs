using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Command;

public class CommandRepository : CoreRepository<CdsCommand>, ICommandRepository
{
    private readonly ILogger<CommandRepository> _logger;
    
    public CommandRepository(ApplicationDbContext context, ILogger<CommandRepository> logger) : base(context)
    {
        _logger = logger;
    }

    public async Task<List<CdsCommand>> GetCommands()
    {
        try
        {
            return await FindAll().ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<CdsCommand>();
        }
    }
}