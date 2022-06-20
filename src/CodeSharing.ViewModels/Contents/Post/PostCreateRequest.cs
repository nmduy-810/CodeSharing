using Microsoft.AspNetCore.Http;

namespace CodeSharing.ViewModels.Contents.Post;

public class PostCreateRequest
{
    public int? Id { get; set; }
    public int CategoryId { get; set; }
    public IFormFile? CoverImage { get; set; }
    public string? PreviewCoverImage { get; set; }
    public string Title { get; set; }
    public string Summary { get; set; }
    public string Content { get; set; }
    public string? Slug { get; set; }
    public string Note { get; set; }
    public string[] Labels { get; set; } = Array.Empty<string>();
    public string? PreviewLabel { get; set; }
}