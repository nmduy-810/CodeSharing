using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.DTL.Models.Statistics.Comment;
using CodeSharing.DTL.Models.Statistics.Post;
using CodeSharing.DTL.Models.Statistics.User;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Repositories;

public class StatisticRepository : GenericRepository<ApplicationDbContext>, IStatisticRepository
{
    public StatisticRepository(ApplicationDbContext context) : base(context)
    {
    }
    
    public async Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year)
    {
        var items = await _context.CdsComments.Where(x => x.CreateDate.Date.Year == year)
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
        var items = await _context.CdsPosts.Where(x => x.CreateDate.Date.Year == year)
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