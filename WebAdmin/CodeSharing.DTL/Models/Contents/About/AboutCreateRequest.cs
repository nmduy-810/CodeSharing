using Microsoft.AspNetCore.Http;

namespace CodeSharing.DTL.Models.Contents.About;

public class AboutCreateRequest
{
    public IFormFile? Image { get; set; }
    public string Description { get; set; } = default!;
}