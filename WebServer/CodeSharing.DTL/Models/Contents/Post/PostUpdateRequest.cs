using Microsoft.AspNetCore.Http;

namespace CodeSharing.DTL.Models.Contents.Post;

public class PostUpdateRequest
{
    public int CategoryId { get; set; }
    public IFormFile CoverImage { get; set; } = default!;
    public string Title { get; set; } = default!;
    public string Content { get; set; } = default!;
    public string Slug { get; set; } = default!;
    public string Note { get; set; } = default!;
    public string[] Labels { get; set; } = default!;
}