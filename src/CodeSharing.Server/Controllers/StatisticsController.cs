using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Constants;
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
    [ClaimRequirement(FunctionCodeConstants.STATISTIC, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetMonthlyNewComments(int year)
    {
        var result = await _statisticService.GetMonthlyNewComments(year);
        return Ok(result);
    }

    [HttpGet("monthly-new-posts")]
    [ClaimRequirement(FunctionCodeConstants.STATISTIC, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetMonthlyNewPosts(int year)
    {
        var result = await _statisticService.GetMonthlyNewPosts(year);
        return Ok(result);
    }

    [HttpGet("monthly-new-registers")]
    [ClaimRequirement(FunctionCodeConstants.STATISTIC, CommandCodeConstants.VIEW)]
    public async Task<IActionResult> GetMonthlyNewRegisters(int year)
    {
        var result = await _statisticService.GetMonthlyNewRegisters(year);
        return Ok(result);
    }
}