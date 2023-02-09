using CodeSharing.DTL.Models.Contents.Label;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public class LabelsController : BaseController
{
    private readonly ILabelService _labelService;

    public LabelsController(ILabelService labelService)
    {
        _labelService = labelService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<List<LabelVm>> GetLabels()
    {
        var result = await _labelService.GetLabels();
        return result;
    }

    [AllowAnonymous]
    [HttpGet("popular/{take:int}")]
    public async Task<List<LabelVm>> GetPopularLabels(int take)
    {
        var result = await _labelService.GetPopularLabels(take);
        return result;
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(string id)
    {
        var result = await _labelService.GetById(id);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found LABEL item for id = {id} in database"));
        
        return Ok(result);
    }

    [HttpGet("post/{postId}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetLabelsByPostId(int postId)
    {
        var result = await _labelService.GetLabelsByPostId(postId);
        return Ok(result);
    }
}