using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class PostController : Controller
{
    private readonly IPostApiClient _postApiClient;
    private readonly ICategoryApiClient _categoryApiClient;
    private readonly IConfiguration _configuration;
    
    public PostController(IPostApiClient postApiClient, ICategoryApiClient categoryApiClient, IConfiguration configuration)
    {
        _postApiClient = postApiClient;
        _categoryApiClient = categoryApiClient;
        _configuration = configuration;
    }
    
    public async Task<IActionResult> Details(int id)
    {
        var post = await _postApiClient.GetDetailsPost(id);
        
        var items = new PostDetailViewModel
        {
            Post = post
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
}