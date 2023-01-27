using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public partial class PostsController
{
    #region Votes

    [HttpGet("{postId}/votes")]
    [AllowAnonymous]
    public async Task<IActionResult> GetVotes(int postId)
    {
        var result = await _postService.GetVotes(postId);
        return Ok(result);
    }

    [HttpPost("{postId}/votes")]
    [AllowAnonymous]
    public async Task<IActionResult> PostVote(int postId)
    {
        var result = await _postService.PostVote(postId, User.GetUserId());
        if (result > 0)
            return Ok(result);
        
        return BadRequest(new ApiBadRequestResponse("VOTE failed"));
    }

    [HttpDelete("{postId}/votes/{userId}")]
    [AllowAnonymous]
    public async Task<IActionResult> DeleteVote(int postId, string userId)
    {
        var result = await _postService.DeleteVote(postId, userId);
        if (result) 
            return Ok();

        return BadRequest(new ApiBadRequestResponse("Delete VOTE failed"));
    }

    #endregion Votes
}