using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Systems.Command;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class CommandRepository : GenericRepository<ApplicationDbContext>, ICommandRepository
{
    public CommandRepository(ApplicationDbContext context) : base(context)
    {
    }

    public async Task<List<CommandVm>> GetCommands()
    {
        var items = await _context.CdsCommands.Select(u => new CommandVm
        {
            Id = u.Id,
            Name = u.Name
        }).ToListAsync();
        
        return items;
    }
}