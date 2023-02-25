using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Extensions;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Contents.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public partial class PostsController : BaseController
{
    private readonly IPostService _postService;
    public PostsController(IPostService postService)
    {
        _postService = postService;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetPosts()
    {
        return CodeSharingResult(await _postService.GetPosts());
    }

    [HttpGet("latest/{take:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetLatestPosts(int take)
    {
        return CodeSharingResult(await _postService.GetLatestPosts(take));
    }

    [HttpGet("popular/{take:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPopularPosts(int take)
    {
        return CodeSharingResult(await _postService.GetPopularPosts(take));
    }

    [HttpGet("trending/{take:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetTrendingPosts(int take)
    {
        return CodeSharingResult(await _postService.GetTrendingPosts(take));
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(int id)
    {
        return CodeSharingResult(await _postService.GetById(id));
    }

    [HttpGet("category/{categoryId:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _postService.GetPostsByCategoryId(categoryId, pageIndex, pageSize));
    }

    [HttpGet("tags/{tagId}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _postService.GetPostsByTagId(tagId, pageIndex, pageSize));
    }

    [HttpGet("total-post")]
    [AllowAnonymous]
    public async Task<IActionResult> GetTotalPostInCategory()
    {
        return CodeSharingResult(await _postService.GetTotalPostInCategory());
    }

    [HttpGet("filter")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _postService.GetPostsPaging(filter, categoryId, pageIndex, pageSize));
    }

    [HttpGet("paging")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsPaging(int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _postService.GetPostsPaging(pageIndex, pageSize));
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_POST, CommandCodeEnum.CREATE)]
    public async Task<IActionResult> Post([FromForm] PostCreateRequest request)
    {
        return CodeSharingResult(await _postService.Post(request, User.GetUserId()));
    }

    [HttpPut("{id}")]
    [Consumes("multipart/form-data")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_POST, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> Put(int id, [FromForm] PostCreateRequest request)
    {
        return CodeSharingResult(await _postService.Put(id, request));
    }

    [HttpDelete("{id}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_POST, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> Delete(int id)
    {
       return CodeSharingResult(await _postService.Delete(id));
    }

    [HttpPut("{id}/view-count")]
    [AllowAnonymous]
    public async Task<IActionResult> UpdateViewCount(int id)
    {
        return CodeSharingResult(await _postService.UpdateViewCount(id));
    }
}