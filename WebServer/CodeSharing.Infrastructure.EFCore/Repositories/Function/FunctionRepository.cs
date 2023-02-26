using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Function;

public class FunctionRepository : CoreRepository<CdsFunction>, IFunctionRepository
{
    private readonly ILogger<FunctionRepository> _logger;
    
    public FunctionRepository(ApplicationDbContext context, ILogger<FunctionRepository> logger) : base(context)
    {
        _logger = logger;
    }

    public async Task<List<CdsFunction>> GetFunctions()
    {
        try
        {
            return await FindAll().ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<CdsFunction>();
        }
    }

    public async Task<CdsFunction?> GetById(string id)
    {
        try
        {
            var function = await FindByIdAsync(id);
            return function ?? null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }

    public async Task<List<CdsFunction>> GetFunctionsByParentId(string functionId)
    {
        try
        {
            return await FindAll().Where(x => x.ParentId == functionId).ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<CdsFunction>();
        }
    }
}