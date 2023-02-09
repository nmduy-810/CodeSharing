using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Repositories.Intefaces;

namespace CodeSharing.Server.Repositories;

public class SupportRepository : GenericRepository<ApplicationDbContext>, ISupportRepository
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
            await _context.Supports.AddAsync(support);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }
}