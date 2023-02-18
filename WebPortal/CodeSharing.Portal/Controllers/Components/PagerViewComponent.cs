using CodeSharing.Core.Models.Pagination;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Portal.Controllers.Components;

public class PagerViewComponent : ViewComponent
{
    public Task<IViewComponentResult> InvokeAsync(PaginationBase paginationBase)
    {
        return Task.FromResult((IViewComponentResult)View("Default", paginationBase));
    }
}