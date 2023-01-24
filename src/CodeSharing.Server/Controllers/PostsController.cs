using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Extensions;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.Utilities.Constants;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public partial class PostsController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<PostsController> _logger;
    private readonly UserManager<User> _userManager;
    private readonly IPostService _postService;
    public PostsController(
        ApplicationDbContext context,
        ILogger<PostsController> logger, UserManager<User> userManager, IPostService postService)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
        _userManager = userManager;
        _postService = postService;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetPosts()
    {
        var result = await _postService.GetPosts();
        return Ok(result);
    }

    [HttpGet("latest/{take:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetLatestPosts(int take)
    {
        var result = await _postService.GetLatestPosts(take);
        return Ok(result);
    }

    [HttpGet("popular/{take:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPopularPosts(int take)
    {
        var result = await _postService.GetPopularPosts(take);
        return Ok(result);
    }

    [HttpGet("trending/{take:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetTrendingPosts(int take)
    {
        var result = await _postService.GetTrendingPosts(take);
        return Ok(result);
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _postService.GetById(id);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found POST item for id = {id} in database"));
        
        return Ok(result);
    }

    [HttpGet("category/{categoryId:int}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsByCategoryId(int? categoryId, int pageIndex, int pageSize)
    {
        var result = await _postService.GetPostsByCategoryId(categoryId, pageIndex, pageSize);
        return Ok(result);
    }

    [HttpGet("tags/{tagId}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsByTagId(string tagId, int pageIndex, int pageSize)
    {
        var result = await _postService.GetPostsByTagId(tagId, pageIndex, pageSize);
        return Ok(result);
    }

    [HttpGet("total-post")]
    [AllowAnonymous]
    public async Task<IActionResult> GetTotalPostInCategory()
    {
        var result = await _postService.GetTotalPostInCategory();
        return Ok(result);
    }

    [HttpGet("filter")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsPaging(string filter, int? categoryId, int pageIndex, int pageSize)
    {
        var result = await _postService.GetPostsPaging(filter, categoryId, pageIndex, pageSize);
        return Ok(result);
    }

    [HttpGet("paging")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsPaging(int pageIndex, int pageSize)
    {
        var result = await _postService.GetPostsPaging(pageIndex, pageSize);
        return Ok(result);
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_POST, CommandCodeConstants.CREATE)]
    public async Task<IActionResult> Post([FromForm] PostCreateRequest request)
    {
        var result = await _postService.Post(request, User.GetUserId());
        if (result)
            return Ok(result);

        return BadRequest(new ApiBadRequestResponse("Insert POST failed"));
    }

    [HttpPut("{id}")]
    [Consumes("multipart/form-data")]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_POST, CommandCodeConstants.UPDATE)]
    public async Task<IActionResult> Put(int id, [FromForm] PostCreateRequest request)
    {
        var result = await _postService.Put(id, request);
        if (result)
            return NoContent();
        
        return BadRequest(new ApiBadRequestResponse("Update POST failed"));
    }

    [HttpDelete("{id}")]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_POST, CommandCodeConstants.DELETE)]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _postService.Delete(id);
        if (result)
            return Ok(result);
        
        return BadRequest(new ApiBadRequestResponse("Delete POST failed"));
    }

    [HttpPut("{id}/view-count")]
    [AllowAnonymous]
    public async Task<IActionResult> UpdateViewCount(int id)
    {
        var result = await _postService.UpdateViewCount(id);
        if (result)
            return Ok(result);
        
        return BadRequest(new ApiBadRequestResponse("Update view post failed"));
    }
}