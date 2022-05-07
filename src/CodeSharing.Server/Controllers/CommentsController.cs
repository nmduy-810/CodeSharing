using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Extensions;
using CodeSharing.Utilities.Commons;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Comment;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public partial class PostsController
{
    #region Comments
    
    [HttpGet("comments/recent/{take}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetRecentComments(int take)
    {
        var query = from c in _context.Comments
            join u in _context.Users on c.OwnerUserId equals u.Id
            join k in _context.Posts on c.PostId equals k.Id
            orderby c.CreateDate descending
            select new { c, u, k };

        var comments = await query.Take(take).Select(x => new CommentVm()
        {
            Id = x.c.Id,
            CreateDate = x.c.CreateDate,
            PostId = x.c.PostId,
            OwnerUserId = x.c.OwnerUserId,
            PostTitle = x.k.Title,
            OwnerName = x.u.FirstName + " " + x.u.LastName,
            PostSlug = x.k.Slug
        }).ToListAsync();

        return Ok(comments);
    }
    
    [HttpGet("{postId}/comments/tree")]
    [AllowAnonymous]
    public async Task<IActionResult> GetCommentTreeByPostId(int postId, int pageIndex, int pageSize)
    {
        var query = from c in _context.Comments
            join u in _context.Users on c.OwnerUserId equals u.Id
            where c.PostId == postId
            select new { c, u };

        var flatComments = await query.Select(x => new CommentVm()
        {
            Id = x.c.Id,
            Content = x.c.Content,
            CreateDate = x.c.CreateDate,
            PostId = x.c.PostId,
            OwnerUserId = x.c.OwnerUserId,
            OwnerName = x.u.FirstName + " " + x.u.LastName,
            ReplyId = x.c.ReplyId
        }).ToListAsync();

        var lookup = flatComments.ToLookup(c => c.ReplyId);
        var rootCategories = flatComments.Where(x => x.ReplyId == null);

        // Only loop through root categories
        foreach (var c in rootCategories)
        {
            // You can skip the check if you want an empty list instead of null
            // when there is no children
            if (lookup.Contains(c.Id))
            {
                c.Children = lookup[c.Id].ToList();
            }
        }

        return Ok(rootCategories);
    }
    
    [HttpGet("{postId}/comments/filter")]
    public async Task<IActionResult> GetCommentsPaging(int? postId, string filter, int pageIndex, int pageSize)
    {
        var query = from c in _context.Comments
            join u in _context.Users on c.OwnerUserId equals u.Id
            select new { u, c };

        if (postId.HasValue)
        {
            query = query.Where(x => x.c.PostId == postId.Value);
        }

        if (!string.IsNullOrEmpty(filter))
        {
            query = query.Where(x => x.c.Content.Contains(filter));
        }

        var totalRecords = await query.CountAsync();
        var items = await query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(c => new CommentVm()
            {
                Id = c.c.Id,
                Content = c.c.Content,
                CreateDate = c.c.CreateDate,
                PostId = c.c.PostId,
                LastModifiedDate = c.c.LastModifiedDate,
                OwnerUserId = c.c.OwnerUserId,
                OwnerName = c.u.FirstName + " " + c.u.LastName
            })
            .ToListAsync();

        var pagination = new Pagination<CommentVm>
        {
            Items = items,
            TotalRecords = totalRecords,
        };
        return Ok(pagination);
    }

    [HttpGet("{postId}/comments/{commentId}")]
    public async Task<IActionResult> GetCommentDetail(int commentId)
    {
        var comment = await _context.Comments.FindAsync(commentId);
        if (comment == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found comment for id = {commentId} in database"));
        }

        var user = await _context.Users.FindAsync(comment.OwnerUserId);
        var commentVm = new CommentVm()
        {
            Id = comment.Id,
            Content = comment.Content,
            CreateDate = comment.CreateDate,
            PostId = comment.PostId,
            LastModifiedDate = comment.LastModifiedDate,
            OwnerUserId = comment.OwnerUserId,
            OwnerName = user?.FirstName + " " + user?.LastName
        };

        return Ok(commentVm);
    }

    [HttpPost("{postId}/comments")]
    public async Task<IActionResult> PostComment(int postId, [FromBody] CommentCreateRequest request)
    {
        var comment = new Comment()
        {
            Content = request.Content,
            PostId = postId,
            OwnerUserId = User.GetUserId(),
            ReplyId = request.ReplyId
        };
        _context.Comments.Add(comment);

        var post = await _context.Posts.FindAsync(postId);
        if (post == null)
        {
            return BadRequest(new ApiBadRequestResponse($"Can't found post with id: {postId}"));
        }

        post.NumberOfComments = post.NumberOfComments.GetValueOrDefault(0) + 1;
        _context.Posts.Update(post);

        var result = await _context.SaveChangesAsync();

        var respose = new CommentCreateResponse()
        {
            Id = comment.Id,
            Content = request.Content,
            PostId = postId,
            ReplyId = request.ReplyId
        };

        if (result <= 0)
        {
            return BadRequest(new ApiBadRequestResponse("Create comment failed"));
        }
        
        return CreatedAtAction(nameof(GetCommentDetail), new { id = postId, commentId = comment.Id }, respose);
    }

    [HttpPut("{postId}/comments/{commentId}")]
    public async Task<IActionResult> PutComment(int commentId, [FromBody] CommentCreateRequest request)
    {
        var comment = await _context.Comments.FindAsync(commentId);
        if (comment == null)
        {
            return BadRequest(new ApiBadRequestResponse($"Can't found comment with id: {commentId}"));
        }

        if (comment.OwnerUserId != User.GetUserId())
        {
            return Forbid();
        }
        
        comment.Content = request.Content;
        _context.Comments.Update(comment);

        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return NoContent();
        }

        return BadRequest(new ApiBadRequestResponse($"Update comment failed"));
    }
    
    [HttpDelete("{postId}/comments/{commentId}")]
    public async Task<IActionResult> DeleteComment(int postId, int commentId)
    {
        var comment = await _context.Comments.FindAsync(commentId);
        if (comment == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found the comment with id: {commentId}"));
        }
        
        _context.Comments.Remove(comment);

        var post = await _context.Posts.FindAsync(postId);
        if (post == null)
        {
            return BadRequest(new ApiBadRequestResponse($"Can't found post with id: {postId}"));
        }
        
        post.NumberOfComments = post.NumberOfVotes.GetValueOrDefault(0) - 1;
        _context.Posts.Update(post);

        var result = await _context.SaveChangesAsync();
        if (result <= 0)
        {
            return BadRequest(new ApiBadRequestResponse($"Delete comment failed"));
        }
        
        var commentVm = new CommentVm()
        {
            Id = comment.Id,
            Content = comment.Content,
            CreateDate = comment.CreateDate,
            PostId = comment.PostId,
            LastModifiedDate = comment.LastModifiedDate,
            OwnerUserId = comment.OwnerUserId
        };
        return Ok(commentVm);
    }
    
    #endregion Comments
}