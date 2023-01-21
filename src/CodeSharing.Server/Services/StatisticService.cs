using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Statistics.Comment;
using CodeSharing.ViewModels.Statistics.Post;
using CodeSharing.ViewModels.Statistics.User;

namespace CodeSharing.Server.Services;

public class StatisticService : IStatisticService
{
    private readonly IStatisticRepository _repository;

    public StatisticService(IStatisticRepository repository)
    {
        _repository = repository;
    }
    public async Task<List<MonthlyNewCommentsVm>> GetMonthlyNewComments(int year)
    {
        var result = await _repository.GetMonthlyNewComments(year);
        return result;
    }

    public async Task<List<MonthlyNewPostsVm>> GetMonthlyNewPosts(int year)
    {
        var result = await _repository.GetMonthlyNewPosts(year);
        return result;
    }

    public async Task<List<MonthlyNewRegisterUsersVm>> GetMonthlyNewRegisters(int year)
    {
        var result = await _repository.GetMonthlyNewRegisters(year);
        return result;
    }
}