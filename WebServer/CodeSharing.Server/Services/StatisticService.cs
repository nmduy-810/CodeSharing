using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Statistics.Comment;
using CodeSharing.DTL.Models.Statistics.Post;
using CodeSharing.DTL.Models.Statistics.User;
using CodeSharing.Infrastructure.EFCore.Repositories.Statistic;

namespace CodeSharing.Server.Services;

public class StatisticService : IStatisticService
{
    private readonly IStatisticRepository _repository;

    public StatisticService(IStatisticRepository repository)
    {
        _repository = repository;
    }
    public async Task<Result<List<MonthlyNewCommentsVm>>> GetMonthlyNewComments(int year)
    {
        var result = new Result<List<MonthlyNewCommentsVm>>();
        try
        {
            var data = await _repository.GetMonthlyNewComments(year);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<MonthlyNewPostsVm>>> GetMonthlyNewPosts(int year)
    {
        var result = new Result<List<MonthlyNewPostsVm>>();
        try
        {
            var data = await _repository.GetMonthlyNewPosts(year);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }

    public async Task<Result<List<MonthlyNewRegisterUsersVm>>> GetMonthlyNewRegisters(int year)
    {
        var result = new Result<List<MonthlyNewRegisterUsersVm>>();
        try
        {
            var data = await _repository.GetMonthlyNewRegisters(year);
            result.SetResult(data);
        }
        catch (Exception e)
        {
            result.Status = ErrorCodeConstant.StatusCode.InternalServerError;
            result.Message = e.Message + "\n\n" + e.InnerException;
        }
        return result;
    }
}