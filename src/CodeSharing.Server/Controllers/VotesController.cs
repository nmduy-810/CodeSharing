using CodeSharing.Server.Extensions;
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
        return CodeSharingResult(await _postService.GetVotes(postId));
    }

    [HttpPost("{postId}/votes")]
    [AllowAnonymous]
    public async Task<IActionResult> PostVote(int postId)
    {
        return CodeSharingResult(await _postService.PostVote(postId, User.GetUserId()));
    }

    [HttpDelete("{postId}/votes/{userId}")]
    [AllowAnonymous]
    public async Task<IActionResult> DeleteVote(int postId, string userId)
    {
        return CodeSharingResult(await _postService.DeleteVote(postId, userId));
    }

    #endregion Votes
}