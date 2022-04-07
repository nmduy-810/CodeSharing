using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Contents.About;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class AboutsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<AboutsController> _logger;

    public AboutsController(ApplicationDbContext context, ILogger<AboutsController> logger)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    [HttpGet]
    public async Task<IActionResult> GetSocialUrls()
    {
        var items = await _context.Abouts.Select(x => new AboutVm()
        {
            Description = x.Description
        }).ToListAsync();

        _logger.LogInformation("Successful execution of get about request");
        return Ok(items);
    }
}