using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Report;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public partial class PostsController
{
    #region Reports

    [HttpPost("{postId}/reports")]
    public async Task<IActionResult> PostReport(int postId, [FromBody] ReportCreateRequest request)
    {
        var result = await _postService.PostReport(postId, request, User.GetUserId());
        if (result) 
            return Ok();
        
        return BadRequest(new ApiBadRequestResponse("Create REPORT failed"));
    }

    #endregion Reports
}