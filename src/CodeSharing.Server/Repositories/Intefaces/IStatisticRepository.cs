using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.DTL.Models.Statistics.Comment;
using CodeSharing.DTL.Models.Statistics.Post;
using CodeSharing.DTL.Models.Statistics.User;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IStatisticRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year);

    Task<List<MonthlyNewPostsVm>> GetMonthlyNewPosts(int year);

    Task<List<MonthlyNewRegisterUsersVm>> GetMonthlyNewRegisters(int year);
}