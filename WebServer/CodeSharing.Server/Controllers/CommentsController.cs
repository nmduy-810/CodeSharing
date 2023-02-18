using CodeSharing.Core.Resources.Constants;
using CodeSharing.Server.Authorization;
using CodeSharing.Server.Extensions;
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
        return CodeSharingResult(await _postService.GetRecentComments(take));
    }

    [HttpGet("{postId}/comments/tree")]
    [AllowAnonymous]
    public async Task<IActionResult> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize)
    {
        return CodeSharingResult(await _postService.GetCommentTreeByPostId(postId, pageIndex, pageSize));
    }

    [HttpGet("comments/all")]
    [AllowAnonymous]
    public async Task<IActionResult> GetComments()
    {
        return CodeSharingResult(await _postService.GetComments());
    }

    [HttpGet("{postId}/comments")]
    [AllowAnonymous]
    public async Task<IActionResult> GetCommentsByPostId(int postId)
    {
        return CodeSharingResult(await _postService.GetCommentsByPostId(postId));
    }

    [HttpGet("{postId}/comments/{commentId}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_COMMENT, CommandCodeEnum.VIEW)]
    public async Task<IActionResult> GetCommentDetail(int commentId)
    {
        return CodeSharingResult(await _postService.GetCommentDetail(commentId));
    }

    [HttpPost("{postId}/comments")]
    public async Task<IActionResult> PostComment(int postId, [FromBody] CommentCreateRequest request)
    {
       return CodeSharingResult(await _postService.PostComment(postId, request, User.GetUserId()));
    }

    [HttpPut("{postId}/comments/{commentId}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_COMMENT, CommandCodeEnum.UPDATE)]
    public async Task<IActionResult> PutComment(int commentId, [FromBody] CommentCreateRequest request)
    {
        return CodeSharingResult(await _postService.PutComment(commentId, request, User.GetUserId()));
    }

    [HttpDelete("{postId}/comments/{commentId}")]
    [ClaimRequirement(FunctionCodeEnum.CONTENT_COMMENT, CommandCodeEnum.DELETE)]
    public async Task<IActionResult> DeleteComment(int postId, int commentId)
    {
        return CodeSharingResult(await _postService.DeleteComment(postId, commentId));
    }

    #endregion Comments
}