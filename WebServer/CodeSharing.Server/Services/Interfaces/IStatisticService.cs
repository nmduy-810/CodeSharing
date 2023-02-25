using CodeSharing.Core.Models.BaseModels;
using CodeSharing.DTL.Models.Statistics.Comment;
using CodeSharing.DTL.Models.Statistics.Post;
using CodeSharing.DTL.Models.Statistics.User;

namespace CodeSharing.Server.Services.Interfaces;

public interface IStatisticService
{
    Task<Result<List<MonthlyNewCommentsVm>>> GetMonthlyNewComments(int year);

    Task<Result<List<MonthlyNewPostsVm>>> GetMonthlyNewPosts(int year);

    Task<Result<List<MonthlyNewRegisterUsersVm>>> GetMonthlyNewRegisters(int year);
}