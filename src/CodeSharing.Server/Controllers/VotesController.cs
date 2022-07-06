using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Vote;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public partial class PostsController
{
    #region Votes

    [HttpGet("{postId}/votes")]
    [AllowAnonymous]
    public async Task<IActionResult> GetVotes(int postId)
    {
        var votes = await _context.Votes
            .Where(x => x.PostId == postId)
            .Select(x => new VoteVm
            {
                PostId = x.PostId,
                UserId = x.UserId,
                CreateDate = x.CreateDate,
                LastModifiedDate = x.LastModifiedDate
            }).ToListAsync();

        return Ok(votes);
    }

    [HttpPost("{postId}/votes")]
    [AllowAnonymous]
    public async Task<IActionResult> PostVote(int postId, [FromBody] VoteCreateRequest request)
    {
        // Get current user id vote
        var userId = User.GetUserId();

        // Find value of post
        var post = await _context.Posts.FindAsync(postId);
        if (post == null) return NotFound(new ApiNotFoundResponse($"Cannot found post with id {postId}"));

        // Get number of votes in current post
        var numberOfVotes = await _context.Votes.CountAsync(x => x.PostId == postId);

        // Find postId in votes table
        var vote = await _context.Votes.FindAsync(postId, userId);

        // Remove votes
        if (vote != null)
        {
            _context.Votes.Remove(vote);
            numberOfVotes -= 1;
        }
        else
        {
            vote = new Vote
            {
                PostId = postId,
                UserId = userId
            };

            _context.Votes.Add(vote);
            numberOfVotes += 1;
        }
        
        // Update number of votes in user
        var user = await _userManager.FindByIdAsync(userId);
        if (user != null)
        {
            user.NumberOfVotes = numberOfVotes;
            await _userManager.UpdateAsync(user);
        }

        post.NumberOfVotes = numberOfVotes;
        _context.Posts.Update(post);

        var result = await _context.SaveChangesAsync();
        if (result > 0)
            return Ok(numberOfVotes);
        return BadRequest(new ApiBadRequestResponse("Vote failed"));
    }

    [HttpDelete("{postId}/votes/{userId}")]
    [AllowAnonymous]
    public async Task<IActionResult> DeleteVote(int postId, string userId)
    {
        var vote = await _context.Votes.FindAsync(postId, userId);
        if (vote == null) return NotFound(new ApiNotFoundResponse("Cannot found vote"));

        var post = await _context.Posts.FindAsync(postId);
        if (post == null) return NotFound(new ApiNotFoundResponse($"Cannot found post with id {postId}"));

        post.NumberOfVotes = post.NumberOfVotes.GetValueOrDefault(0) - 1;

        _context.Posts.Update(post);
        _context.Votes.Remove(vote);

        var result = await _context.SaveChangesAsync();
        if (result > 0) return Ok();

        return BadRequest(new ApiBadRequestResponse("Delete vote failed"));
    }

    #endregion Votes
}