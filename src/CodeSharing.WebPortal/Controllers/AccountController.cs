using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.User;
using CodeSharing.WebPortal.Extensions;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace CodeSharing.WebPortal.Controllers;

[Authorize]
public class AccountController : Controller
{
    private readonly ICategoryApiClient _categoryApiClient;
    private readonly IPostApiClient _postApiClient;
    private readonly IUploadApiClient _uploadApiClient;
    private readonly IUserApiClient _userApiClient;
    private readonly ILabelApiClient _labelApiClient;
    private readonly IConfiguration _configuration;

    public AccountController(IUserApiClient userApiClient, IPostApiClient postApiClient,
        ICategoryApiClient categoryApiClient, IUploadApiClient uploadApiClient, ILabelApiClient labelApiClient, IConfiguration configuration)
    {
        _userApiClient = userApiClient;
        _postApiClient = postApiClient;
        _categoryApiClient = categoryApiClient;
        _uploadApiClient = uploadApiClient;
        _labelApiClient = labelApiClient;
        _configuration = configuration;
    }

    [AllowAnonymous]
    public IActionResult SignIn()
    {
        return Challenge(new AuthenticationProperties { RedirectUri = "/" }, "oidc");
    }

    public new IActionResult SignOut()
    {
        return SignOut(new AuthenticationProperties { RedirectUri = "/" }, "Cookies", "oidc");
    }

    [HttpGet]
    public async Task<IActionResult> MyProfile()
    {
        var user = await _userApiClient.GetById(User.GetUserId());

        var items = new UserDetailViewModel
        {
            UserName = user.UserName,
            FullName = string.Concat(user.FirstName, " ", user.LastName),
            PhoneNumber = user.PhoneNumber,
            Email = user.Email,
            Birthday = user.Birthday
        };

        return View(items);
    }

    [HttpPost]
    public async Task<IActionResult> MyProfile(UserDetailViewModel request)
    {
        var nameSegments = request.FullName.Split(' ');
        var firstName = nameSegments.First();
        var middleName = string.Join(" ", nameSegments.Skip(1).Take(nameSegments.Length - 2));
        var lastName = nameSegments.Last();

        var userRequest = new UserCreateRequest
        {
            FirstName = firstName,
            LastName = middleName + " " + lastName,
            Birthday = request.Birthday
        };

        await _userApiClient.PutUser(User.GetUserId(), userRequest);

        return Redirect("/");
    }

    [HttpGet]
    public async Task<IActionResult> MyPosts(int page = 1, int pageSize = 10)
    {
        var posts = await _userApiClient.GetPostsByUserId(User.GetUserId(), page, pageSize);
        return View(posts);
    }

    [HttpGet]
    public async Task<IActionResult> CreateNewPost()
    {
        await SetCategories();
        await LoadPopularLabels();
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> CreateNewPost([FromForm] PostCreateRequest request)
    {
        if (ModelState.IsValid)
        {
            var result = await _postApiClient.PostPost(request);
            if (result)
            {
                return RedirectToAction("MyPosts", "Account");
            }
        }

        await SetCategories();
        await LoadPopularLabels();
        return View(request);
    }

    [HttpGet]
    public async Task<IActionResult> EditPost(int id)
    {
        var post = await _postApiClient.GetDetailsPost(id);
        await SetCategories();
        await LoadPopularLabels();
        
        var items = new PostCreateRequest
        {
            CategoryId = post.CategoryId,
            Title = post.Title,
            Summary = post.Summary,
            Content = post.Content,
            Note = post.Note,
            PreviewCoverImage = post.CoverImage,
            Slug = post.Slug
        };

        var tagList = new List<string>();

        // Labels
        if (post.Labels != null)
        {
            foreach (var label in post.Labels)
            {
                tagList.Add("#" + label);
            }
        }

        items.Labels = tagList.Select(x => x.ToString()).ToArray();

        // Show label for user
        items.PreviewLabel = string.Join(" ", items.Labels);

        return View(items);
    }

    [HttpPost]
    public async Task<IActionResult> EditPost([FromForm] PostCreateRequest request)
    {
        // Check label
        if (!string.IsNullOrEmpty(request.PreviewLabel)) request.Labels = new[] { request.PreviewLabel };

        if (ModelState.IsValid)
        {
            return View(request);
        }

        if (request.Id == null)
        {
            return BadRequest();
        }

        var result = await _postApiClient.PutPost(request.Id.Value, request);
        if (result)
        {
            return RedirectToAction("MyPosts", "Account");
        }

        return BadRequest();
    }

    [HttpGet]
    public async Task<IActionResult> DeletePost(int id)
    {
        var post = await _postApiClient.GetDetailsPost(id);
        var response = await _postApiClient.DeletePost(post.Id);
        if (response)
        {
            return RedirectToAction("MyPosts", "Account");
        }
        return BadRequest();
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> UploadImage()
    {
        var imageUrl = string.Empty;
        foreach (var photo in Request.Form.Files)
        {
            var response = await _uploadApiClient.UploadImage(photo);
            if (response is { Uploaded: true }) imageUrl = response.Url;
        }

        return Json(new { url = imageUrl });
    }

    public async Task<IActionResult> MyUsers(int page = 1)
    {
        var pageSize = int.Parse(_configuration["PageIndexSize"]);
        var users = await _userApiClient.GetUsersPaging(page, pageSize);

        var items = new UserViewModel
        {
            Users = users
        };

        return View(items);
    }

    #region Helper Method

    private async Task SetCategories(int? selectedValue = null)
    {
        var categories = await _categoryApiClient.GetCategories();
        var items = categories.Select(x => new SelectListItem
        {
            Text = x.Title,
            Value = x.Id.ToString()
        }).ToList();

        items.Insert(0, new SelectListItem
        {
            Value = null,
            Text = "Chọn danh mục"
        });

        ViewBag.Categories = new SelectList(items, "Value", "Text", selectedValue);
    }

    public async Task LoadPopularLabels()
    {
        var popularLabels = await _labelApiClient.GetPopularLabels(10);
        ViewBag.PopularLabels = popularLabels;
    }

    #endregion Helper Method
}