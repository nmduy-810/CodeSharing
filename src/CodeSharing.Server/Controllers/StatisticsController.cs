using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Constants;
using CodeSharing.ViewModels.Statistics.Comment;
using CodeSharing.ViewModels.Statistics.Post;
using CodeSharing.ViewModels.Statistics.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class StatisticsController : BaseController
{
    private readonly ApplicationDbContext _context;

    public StatisticsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("monthly-new-comments")]
    [ClaimRequirement(FunctionCodeConstants.STATISTIC, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetMonthlyNewComments(int year)
    {
        var items = await _context.Comments.Where(x => x.CreateDate.Date.Year == year)
            .GroupBy(x => x.CreateDate.Date.Month)
            .OrderBy(x => x.Key)
            .Select(x => new MonthlyNewCommentsVm()
            {
                Month = x.Key,
                NumberOfComments = x.Count()
            }).ToListAsync();

        return Ok(items);
    }

    [HttpGet("monthly-new-posts")]
    [ClaimRequirement(FunctionCodeConstants.STATISTIC, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetMonthlyNewPosts(int year)
    {
        var items = await _context.Posts.Where(x => x.CreateDate.Date.Year == year)
            .GroupBy(x => x.CreateDate.Date.Month)
            .Select(x => new MonthlyNewPostsVm()
            {
                Month = x.Key,
                NumberOfNewPosts = x.Count()
            }).ToListAsync();

        return Ok(items);
    }
    
    [HttpGet("monthly-new-registers")]
    [ClaimRequirement(FunctionCodeConstants.STATISTIC, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetMonthlyNewRegisters(int year)
    {
        var items = await _context.Users.Where(x => x.CreateDate.Date.Year == year)
            .GroupBy(x => x.CreateDate.Date.Month)
            .Select(x => new MonthlyNewRegisterUsersVm()
            {
                Month = x.Key,
                NumberOfRegisterUsers = x.Count()
            }).ToListAsync();

        return Ok(items);
    }
}