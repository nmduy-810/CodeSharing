using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;
using CodeSharing.Portal.Interfaces;
using CodeSharing.Portal.ViewModels;
using CodeSharing.Portal.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Controllers;

public class PostController : Controller
{
    private readonly ICategoryApiClient _categoryApiClient;
    private readonly IConfiguration _configuration;
    private readonly ILabelApiClient _labelApiClient;
    private readonly IPostApiClient _postApiClient;
    private readonly IUserApiClient _userApiClient;

    public PostController(IPostApiClient postApiClient, ICategoryApiClient categoryApiClient,
        ILabelApiClient labelApiClient, IUserApiClient userApiClient, IConfiguration configuration)
    {
        _postApiClient = postApiClient;
        _categoryApiClient = categoryApiClient;
        _labelApiClient = labelApiClient;
        _userApiClient = userApiClient;
        _configuration = configuration;
    }

    public async Task<IActionResult> Details(int id)
    {
        var post = await _postApiClient.GetDetailsPost(id);
        var label = await _labelApiClient.GetLabelsByPostId(id);

        var items = new PostDetailViewModel
        {
            Post = post.Data,
            Label = label.Data
        };

        if (User.Identity != null && User.Identity.IsAuthenticated)
            items.CurrentUser = _userApiClient.GetById(User.GetUserId()).Result.Data;

        // Update view count when user clicked post
        //await _postApiClient.UpdateViewCount(id);

        return View(items);
    }

    public async Task<IActionResult> ListByCategoryId(int id, int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageSize"]);
        var category = await _categoryApiClient.GetById(id);
        var data = await _postApiClient.GetPostsByCategoryId(id, page, pageSize);
        var items = new ListByCategoryIdViewModel
        {
            Data = data.Data,
            Category = category.Data
        };

        return View(items);
    }

    public async Task<IActionResult> ListByTagId(string id, int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageSize"]);
        var label = await _labelApiClient.GetById(id);
        var data = await _postApiClient.GetPostsByTagId(id, page, pageSize);
        var items = new ListByTagIdViewModel
        {
            Data = data.Data,
            Label = label.Data
        };

        return View(items);
    }

    public async Task<IActionResult> Search(string keyword, int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageSize"]);
        var posts = await _postApiClient.SearchPosts(keyword, page, pageSize);
        var items = new SearchPostViewModel
        {
            Data = posts.Data,
            Keyword = keyword
        };
        return View(items);
    }

    #region AJAX Methods (wwwroot/js/controller)

    public async Task<IActionResult> GetCommentByPostId(int postId)
    {
        var result = await _postApiClient.GetCommentsTree(postId);
        return Ok(result);
    }

    public async Task<IActionResult> AddNewComment([FromForm] CommentCreateRequest request)
    {
        var result = await _postApiClient.PostComment(request);
        return Ok(result);
    }

    public async Task<IActionResult> PostVote([FromForm] VoteCreateRequest request)
    {
        var result = await _postApiClient.PostVote(request);
        return Ok(result);
    }

    public async Task<IActionResult> PostReport([FromForm] ReportCreateRequest request)
    {
        var result = await _postApiClient.PostReport(request);
        return Ok(result);
    }

    #endregion AJAX Methods
}