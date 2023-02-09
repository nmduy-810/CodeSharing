using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Contents.Label;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class LabelRepository : GenericRepository<ApplicationDbContext>, ILabelRepository
{
    public LabelRepository(ApplicationDbContext context) : base(context)
    {
    }


    public async Task<List<LabelVm>> GetLabels()
    {
        var items = await _context.Labels.Select(x => new LabelVm
        {
            Id = x.Id,
            Name = x.Name
        }).ToListAsync();
        
        return items;
    }

    public async Task<LabelVm?> GetById(string id)
    {
        var label = await _context.Labels.FindAsync(id);
        if (label == null)
            return null;

        var labelVm = new LabelVm
        {
            Id = label.Id,
            Name = label.Name
        };

        return labelVm;
    }

    public async Task<List<LabelInPostVm>?> GetLabelsByPostId(int postId)
    {
        var post = from p in _context.Posts
            join lip in _context.LabelInPosts on p.Id equals lip.PostId
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

    public async Task<List<LabelVm>> GetPopularLabels(int take)
    {
        var query = from l in _context.Labels
            join lip in _context.LabelInPosts on l.Id equals lip.LabelId
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
}