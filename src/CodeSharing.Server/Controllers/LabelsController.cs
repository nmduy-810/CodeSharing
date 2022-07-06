using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Label;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class LabelsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<LabelsController> _logger;

    public LabelsController(ApplicationDbContext context, ILogger<LabelsController> logger)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<List<LabelVm>> GetLabels()
    {
        var items = await _context.Labels.Select(x => new LabelVm
        {
            Id = x.Id,
            Name = x.Name
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get popular labels request");
        return items;
    }

    [HttpGet("popular/{take:int}")]
    [AllowAnonymous]
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

        _logger.LogInformation("Successful execution of get popular labels request");
        return items;
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(string id)
    {
        var label = await _context.Labels.FindAsync(id);
        if (label == null)
            return NotFound(new ApiNotFoundResponse($"Cannotfound label item for id = {id} in database"));

        var labelVm = new LabelVm
        {
            Id = label.Id,
            Name = label.Name
        };

        _logger.LogInformation("Successful execution of get label by id request");
        return Ok(labelVm);
    }

    [HttpGet("post/{postId}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetLabelsByPostId(int postId)
    {
        var post = from p in _context.Posts
            join lip in _context.LabelInPosts on p.Id equals lip.PostId
            where p.Id == postId
            select new { lip, p };

        if (!post.Any())
            return NotFound(new ApiNotFoundResponse($"Cannot found label item for id = {postId} in database"));

        var items = await post.Select(x => new LabelInPostVm
        {
            PostId = x.p.Id,
            LabelId = x.lip.LabelId
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get label by post id request");
        return Ok(items);
    }
}