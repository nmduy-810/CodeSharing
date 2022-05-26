using CodeSharing.ViewModels.Systems.User;
using CodeSharing.WebPortal.Extensions;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class AccountController : Controller
{
    private readonly IUserApiClient _userApiClient;
    public AccountController(IUserApiClient userApiClient)
    {
        _userApiClient = userApiClient;
    }
    public IActionResult SignIn()
    {
        return Challenge(new AuthenticationProperties { RedirectUri = "/" }, "oidc");
    }

    public new IActionResult SignOut()
    {
        return SignOut(new AuthenticationProperties { RedirectUri = "/" }, "Cookies", "oidc");
    }

    [Authorize]
    public async Task<IActionResult> MyProfile()
    {
        var user = await _userApiClient.GetById(User.GetUserId());

        var items = new UserDetailViewModel()
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

        var userRequest = new UserCreateRequest()
        {
            FirstName = firstName,
            LastName = middleName + " " + lastName,
            Birthday = request.Birthday
        };

        await _userApiClient.PutUser(User.GetUserId(), userRequest);

        return Redirect("/");
    }
}