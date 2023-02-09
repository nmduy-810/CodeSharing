using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Helpers;
using CodeSharing.DTL.Models.Contents.Comment;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.Server.Controllers;

public partial class PostsController
{
    #region Comments

    [HttpGet("comments/recent/{take}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetRecentComments(int take)
    {
        var result = await _postService.GetRecentComments(take);
        return Ok(result);
    }

    [HttpGet("{postId}/comments/tree")]
    [AllowAnonymous]
    public async Task<IActionResult> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize)
    {
        var result = await _postService.GetCommentTreeByPostId(postId, pageIndex, pageSize);
        return Ok(result);
    }

    [HttpGet("comments/all")]
    [AllowAnonymous]
    public async Task<IActionResult> GetComments()
    {
        var result = await _postService.GetComments();
        return Ok(result);
    }

    [HttpGet("{postId}/comments")]
    [AllowAnonymous]
    public async Task<IActionResult> GetCommentsByPostId(int postId)
    {
        var result = await _postService.GetCommentsByPostId(postId);
        return Ok(result);
    }

    [HttpGet("{postId}/comments/{commentId}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_COMMENT, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetCommentDetail(int commentId)
    {
        var result = await _postService.GetCommentDetail(commentId);
        if (result == null)
            return NotFound(new ApiNotFoundResponse($"Not found COMMENT item for id = {commentId} in database"));
        
        return Ok(result);
    }

    [HttpPost("{postId}/comments")]
    public async Task<IActionResult> PostComment(int postId, [FromBody] CommentCreateRequest request)
    {
        var result = await _postService.PostComment(postId, request, User.GetUserId());
        if (result)
            return Ok(result);
        
        return BadRequest(new ApiBadRequestResponse("Create COMMENT failed"));
    }

    [HttpPut("{postId}/comments/{commentId}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_COMMENT, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> PutComment(int commentId, [FromBody] CommentCreateRequest request)
    {
        var result = await _postService.PutComment(commentId, request, User.GetUserId());
        if (result) 
            return NoContent();

        return BadRequest(new ApiBadRequestResponse("Update COMMENT failed"));
    }

    [HttpDelete("{postId}/comments/{commentId}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_COMMENT, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> DeleteComment(int postId, int commentId)
    {
        var result = await _postService.DeleteComment(postId, commentId);
        if (result) 
            return Ok(result);

        return BadRequest(new ApiBadRequestResponse("Delete COMMENT failed"));
    }

    #endregion Comments
}