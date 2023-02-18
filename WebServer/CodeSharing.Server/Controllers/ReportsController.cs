using CodeSharing.Server.Extensions;
using CodeSharing.DTL.Models.Contents.Report;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public partial class PostsController
{
    #region Reports

    [HttpPost("{postId}/reports")]
    public async Task<IActionResult> PostReport(int postId, [FromBody] ReportCreateRequest request)
    {
        return CodeSharingResult(await _postService.PostReport(postId, request, User.GetUserId()));
    }

    #endregion Reports
}