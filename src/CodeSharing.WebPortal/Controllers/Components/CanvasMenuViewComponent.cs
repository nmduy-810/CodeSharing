using System.Security.Claims;
using CodeSharing.WebPortal.Extensions;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers.Components;

public class CanvasMenuViewComponent : ViewComponent
{
    private readonly ICategoryApiClient _categoryApiClient;
    private readonly IUserApiClient _userApiClient;
    
    public CanvasMenuViewComponent(ICategoryApiClient categoryApiClient, IUserApiClient userApiClient)
    {
        _categoryApiClient = categoryApiClient;
        _userApiClient = userApiClient;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var categories = await _categoryApiClient.GetCategories();
        
        var items = new CanvasMenuViewModel()
        {
            Categories = categories
        };
        
        var user = User as ClaimsPrincipal;
        if (user?.Identity != null && user.Identity.IsAuthenticated)
        {
            items.CurrentUser = await _userApiClient.GetById(user.GetUserId());
        }
        
        return View("Default", items);
    }
}