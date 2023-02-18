using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Infrastructure.EFCore.Repositories.Core;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.Support;

public class SupportRepository : CoreRepository<CdsSupport>, ISupportRepository
{
    private readonly ILogger<SupportRepository> _logger;
    
    public SupportRepository(ApplicationDbContext context, ILogger<SupportRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
    
    public async Task<CdsSupport?> PostSupport(CdsSupport support)
    {
        try
        {
            var entity = await CreateAsync(support);
            return await SaveChangesAsync() > 0 ? entity : null;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }
}