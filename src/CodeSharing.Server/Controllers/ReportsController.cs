using CodeSharing.Server.Datas.Entities;
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
        var report = new Report
        {
            Content = request.Content,
            PostId = postId,
            ReportUserId = User.GetUserId(),
            IsProcessed = false
        };

        _context.Reports.Add(report);

        var post = await _context.Posts.FindAsync(postId);
        if (post == null)
            return BadRequest(new ApiBadRequestResponse($"Cannot found post with id {postId}"));

        post.NumberOfReports = post.NumberOfReports.GetValueOrDefault(0) + 1;
        _context.Posts.Update(post);

        var result = await _context.SaveChangesAsync();
        if (result > 0) return Ok();
        return BadRequest(new ApiBadRequestResponse("Create report failed"));
    }

    #endregion Reports
}