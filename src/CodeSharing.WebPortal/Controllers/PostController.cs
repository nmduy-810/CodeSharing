using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class PostController : Controller
{
    private readonly IPostApiClient _postApiClient;
    private readonly ICategoryApiClient _categoryApiClient;
    private readonly ILabelApiClient _labelApiClient;
    private readonly IConfiguration _configuration;
    
    public PostController(IPostApiClient postApiClient, ICategoryApiClient categoryApiClient, ILabelApiClient labelApiClient, IConfiguration configuration)
    {
        _postApiClient = postApiClient;
        _categoryApiClient = categoryApiClient;
        _labelApiClient = labelApiClient;
        _configuration = configuration;
    }
    
    public async Task<IActionResult> Details(int id)
    {
        var post = await _postApiClient.GetDetailsPost(id);
        var label = await _labelApiClient.GetLabelsByPostId(id);
        
        var items = new PostDetailViewModel
        {
            Post = post,
            Label = label
        };
        
        return View(items);
    }

    public async Task<IActionResult> ListByCategoryId(int id, int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageSize"]);
        var category = await _categoryApiClient.GetById(id);
        var data = await _postApiClient.GetPostsByCategoryId(id, page, pageSize);
        var items = new ListByCategoryIdViewModel()
        {
            Data = data,
            Category = category
        };

        return View(items);
    }

    public async Task<IActionResult> ListByTagId(string id, int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageSize"]);
        var label = await _labelApiClient.GetById(id);
        var data = await _postApiClient.GetPostsByTagId(id, page, pageSize);
        var items = new ListByTagIdViewModel()
        {
            Data = data,
            Label = label
        };

        return View(items);
    }
    
    public async Task<IActionResult> Search(string keyword, int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageSize"]);
        var data = await _postApiClient.SearchPosts(keyword, page, pageSize);
        var items = new SearchPostViewModel()
        {
            Data = data,
            Keyword = keyword
        };
        return View(items);
    }
}