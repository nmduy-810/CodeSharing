using CodeSharing.Utilities.Commons;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers.Components;

public class PagerViewComponent : ViewComponent
{
    public PagerViewComponent()
    {
        
    }

    public Task<IViewComponentResult> InvokeAsync(PaginationBase paginationBase)
    {
        return Task.FromResult((IViewComponentResult)View("Default", paginationBase));
    }
}