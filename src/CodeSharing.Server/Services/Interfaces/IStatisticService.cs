using CodeSharing.ViewModels.Statistics.Comment;
using CodeSharing.ViewModels.Statistics.Post;
using CodeSharing.ViewModels.Statistics.User;

namespace CodeSharing.Server.Services.Interfaces;

public interface IStatisticService
{
    Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year);

    Task<List<MonthlyNewPostsVm>> GetMonthlyNewPosts(int year);

    Task<List<MonthlyNewRegisterUsersVm>> GetMonthlyNewRegisters(int year);
}