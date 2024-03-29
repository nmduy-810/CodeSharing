using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class StatisticsController : BaseController
{
    private readonly IStatisticService _statisticService;
    
    public StatisticsController(IStatisticService statisticService)
    {
        _statisticService = statisticService;
    }

    [HttpGet("monthly-new-comments")]
    [ClaimRequirement(FunctionCodeEnum.STATISTIC, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetMonthlyNewComments(int year)
    {
        return CodeSharingResult(await _statisticService.GetMonthlyNewComments(year));
    }

    [HttpGet("monthly-new-posts")]
    [ClaimRequirement(FunctionCodeEnum.STATISTIC, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetMonthlyNewPosts(int year)
    {
        return CodeSharingResult(await _statisticService.GetMonthlyNewPosts(year));
    }

    [HttpGet("monthly-new-registers")]
    [ClaimRequirement(FunctionCodeEnum.STATISTIC, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetMonthlyNewRegisters(int year)
    {
        return CodeSharingResult(await _statisticService.GetMonthlyNewRegisters(year));
    }
}