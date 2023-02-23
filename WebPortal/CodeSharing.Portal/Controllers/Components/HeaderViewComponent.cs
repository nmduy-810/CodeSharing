using System.Security.Claims;
using CodeSharing.Portal.Interfaces;
using CodeSharing.Portal.ViewModels;
using CodeSharing.Portal.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Controllers.Components;

public class HeaderViewComponent : ViewComponent
{
    private readonly ICategoryApiClient _categoryApiClient;
    private readonly IUserApiClient _userApiClient;

    public HeaderViewComponent(ICategoryApiClient categoryApiClient, IUserApiClient userApiClient)
    {
        _categoryApiClient = categoryApiClient;
        _userApiClient = userApiClient;
    }

    public async Task<IViewComponentResult> InvokeAsync(string componentView = "Default")
    {
        var categories = await _categoryApiClient.GetCategories();

        var items = new HeaderViewModel
        {
            Categories = categories.Data
        };

        var user = User as ClaimsPrincipal;
        if (user?.Identity != null && user.Identity.IsAuthenticated)
        {
            items.CurrentUser = _userApiClient.GetById(user.GetUserId()).Result.Data;
        }

        return View(componentView, items);
    }
}