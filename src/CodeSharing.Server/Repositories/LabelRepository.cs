using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Contents.Label;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class LabelRepository : GenericRepository<ApplicationDbContext>, ILabelRepository
{
    private readonly ILogger<LabelRepository> _logger;
    
    public LabelRepository(ApplicationDbContext context, ILogger<LabelRepository> logger) : base(context)
    {
        _logger = logger;
    }
    
    public async Task<List<LabelVm>> GetLabels()
    {
        try
        {
            var items = await _context.CdsLabels.Select(x => new LabelVm
            {
                Id = x.Id,
                Name = x.Name
            }).ToListAsync();
        
            return items;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<LabelVm>();
        }
    }

    public async Task<LabelVm?> GetById(string id)
    {
        try
        {
            var label = await _context.CdsLabels.FindAsync(id);
            if (label == null)
                return null;

            var labelVm = new LabelVm
            {
                Id = label.Id,
                Name = label.Name
            };

            return labelVm;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return null;
        }
    }

    public async Task<List<LabelInPostVm>?> GetLabelsByPostId(int postId)
    {
        try
        {
            var post = from p in _context.CdsPosts
                join lip in _context.CdsLabelInPosts on p.Id equals lip.PostId
                where p.Id == postId
                select new { lip, p };

            if (!post.Any())
                return null;

            var items = await post.Select(x => new LabelInPostVm
            {
                PostId = x.p.Id,
                LabelId = x.lip.LabelId
            }).ToListAsync();
        
            return items;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<LabelInPostVm>();
        }
    }

    public async Task<List<LabelVm>> GetPopularLabels(int take)
    {
        try
        {
            var query = from l in _context.CdsLabels
                join lip in _context.CdsLabelInPosts on l.Id equals lip.LabelId
                group new { l.Id, l.Name } by new { l.Id, l.Name }
                into g
                select new
                {
                    g.Key.Id,
                    g.Key.Name,
                    Count = g.Count()
                };

            var items = await query.OrderByDescending(x => x.Count).Take(take).Select(x => new LabelVm
            {
                Id = x.Id,
                Name = x.Name
            }).ToListAsync();
        
            return items;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<LabelVm>();
        }
    }
}