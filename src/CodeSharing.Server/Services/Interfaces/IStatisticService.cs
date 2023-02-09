using CodeSharing.DTL.Models.Statistics.Comment;
using CodeSharing.DTL.Models.Statistics.Post;
using CodeSharing.DTL.Models.Statistics.User;

namespace CodeSharing.Server.Services.Interfaces;

public interface IStatisticService
{
    Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year);

    Task<List<MonthlyNewPostsVm>> GetMonthlyNewPosts(int year);

    Task<List<MonthlyNewRegisterUsersVm>> GetMonthlyNewRegisters(int year);
}