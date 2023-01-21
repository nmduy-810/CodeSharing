using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Statistics.Comment;
using CodeSharing.ViewModels.Statistics.Post;
using CodeSharing.ViewModels.Statistics.User;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Services;

public class StatisticService : IStatisticService
{
    private readonly ApplicationDbContext _context;

    public StatisticService(ApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year)
    {
        var items = await _context.Comments.Where(x => x.CreateDate.Date.Year == year)
            .GroupBy(x => x.CreateDate.Date.Month)
            .OrderBy(x => x.Key)
            .Select(x => new MonthlyNewCommentsVm
            {
                Month = x.Key,
                NumberOfComments = x.Count()
            }).ToListAsync();

        return items;
    }

    public async Task<List<MonthlyNewPostsVm>> GetMonthlyNewPosts(int year)
    {
        var items = await _context.Posts.Where(x => x.CreateDate.Date.Year == year)
            .GroupBy(x => x.CreateDate.Date.Month)
            .Select(x => new MonthlyNewPostsVm
            {
                Month = x.Key,
                NumberOfNewPosts = x.Count()
            }).ToListAsync();

        return items;
    }

    public async Task<List<MonthlyNewRegisterUsersVm>> GetMonthlyNewRegisters(int year)
    {
        var items = await _context.Users.Where(x => x.CreateDate.Date.Year == year)
            .GroupBy(x => x.CreateDate.Date.Month)
            .Select(x => new MonthlyNewRegisterUsersVm
            {
                Month = x.Key,
                NumberOfRegisterUsers = x.Count()
            }).ToListAsync();

        return items;
    }
}