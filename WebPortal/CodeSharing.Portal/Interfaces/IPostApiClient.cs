using CodeSharing.Core.Models.BaseModels;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Comment;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Contents.Report;
using CodeSharing.DTL.Models.Contents.Vote;

namespace CodeSharing.Portal.Interfaces;

public interface IPostApiClient
{
    Task<Result<List<PostQuickVm>>> GetPopularPosts(int take);
    
    Task<Result<List<PostQuickVm>>> GetLatestPosts(int take);
    
    Task<Result<List<PostQuickVm>>> GetTrendingPosts(int take);
    
    Task<Result<PostVm>> GetDetailsPost(int id);
    
    Task<Result<Pagination<PostQuickVm>>> GetPostsByCategoryId(int categoryId, int pageIndex, int pageSize);
    
    Task<Result<Pagination<PostQuickVm>>> GetPostsByTagId(string tagId, int pageIndex, int pageSize);
    
    Task<Result<List<PostQuickVm>>> GetTotalPostInCategory();
    
    Task<Result<Pagination<PostQuickVm>>> SearchPosts(string keyword, int pageIndex, int pageSize);
    
    Task<Result<Pagination<PostQuickVm>>> GetLatestPostsPaging(int pageIndex, int pageSize);
    
    Task<Result<List<CommentVm>>> GetRecentComments(int take);
    
    Task<Result<List<CommentVm>>> GetCommentsTree(int postId);
    
    Task<Result<CommentVm>> PostComment(CommentCreateRequest request);
    
    Task<Result<int>> PostVote(VoteCreateRequest request);
    
    Task<Result<bool>> UpdateViewCount(int id);
    
    Task<Result<ReportVm>> PostReport(ReportCreateRequest request);
    
    Task<Result<int>> PostPost(PostCreateRequest request);
    
    Task<Result<int>> PutPost(int id, PostCreateRequest request);
    
    Task<Result<PostVm>> DeletePost(int id);
}