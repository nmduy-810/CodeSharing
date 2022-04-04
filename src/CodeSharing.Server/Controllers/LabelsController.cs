using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Contents.Label;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class LabelsController : BaseController
{
    private readonly ApplicationDbContext _context;

    public LabelsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [AllowAnonymous]
    [HttpGet("popular/{take:int}")]
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

        var items = await query.OrderByDescending(x => x.Count).Take(take).Select(x => new LabelVm()
        {
            Id = x.Id,
            Name = x.Name
        }).ToListAsync();

        return items;
    }
    
    [AllowAnonymous]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var label = await _context.Labels.FindAsync(id);
        if (label == null)
        {
            return NotFound();
        }
        
        var labelVm = new LabelVm()
        {
            Id = label.Id,
            Name = label.Name
        };

        return Ok(labelVm);
    }
}