using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;

namespace CodeSharing.Server.Repositories;

public class SupportRepository : GenericRepository<Support, int>, ISupportRepository
{
    private readonly ILogger<SupportRepository> _logger;
    
    public SupportRepository(ApplicationDbContext context, ILogger<SupportRepository> logger) : base(context)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
    
    public async Task<bool> PostSupport(Support support)
    {
        try
        {
            await CreateAsync(support);
            var result = await SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}