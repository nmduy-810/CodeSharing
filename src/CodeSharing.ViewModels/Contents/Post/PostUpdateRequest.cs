using Microsoft.AspNetCore.Http;

namespace CodeSharing.ViewModels.Contents.Post;

public class PostUpdateRequest
{
    public int CategoryId { get; set; }
    public IFormFile CoverImage { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public string Slug { get; set; }
    public string Note { get; set; }
    public string[] Labels { get; set; }
}