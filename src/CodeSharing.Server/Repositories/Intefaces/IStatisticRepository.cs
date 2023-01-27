using CodeSharing.Server.Datas.Provider;
using CodeSharing.ViewModels.Statistics.Comment;
using CodeSharing.ViewModels.Statistics.Post;
using CodeSharing.ViewModels.Statistics.User;

namespace CodeSharing.Server.Repositories.Intefaces;

public interface IStatisticRepository : IGenericRepository<ApplicationDbContext>
{
    Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year);

    Task<List<MonthlyNewPostsVm>> GetMonthlyNewPosts(int year);

    Task<List<MonthlyNewRegisterUsersVm>> GetMonthlyNewRegisters(int year);
}