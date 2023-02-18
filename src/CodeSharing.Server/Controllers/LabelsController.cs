using CodeSharing.Server.Services.Interfaces;
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
    public async Task<IActionResult> GetLabels()
    {
        return CodeSharingResult(await _labelService.GetLabels());
    }

    [AllowAnonymous]
    [HttpGet("popular/{take:int}")]
    public async Task<IActionResult> GetPopularLabels(int take)
    {
        return CodeSharingResult(await _labelService.GetPopularLabels(take));
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(string id)
    {
        return CodeSharingResult(await _labelService.GetById(id));
    }

    [HttpGet("post/{postId}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetLabelsByPostId(int postId)
    {
        return CodeSharingResult(await _labelService.GetLabelsByPostId(postId));
    }
}