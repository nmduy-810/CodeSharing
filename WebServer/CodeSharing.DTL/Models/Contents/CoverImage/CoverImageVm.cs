namespace CodeSharing.DTL.Models.Contents.CoverImage;

public class CoverImageVm
{
    public int Id { get; set; }

    public string ImageUrl { get; set; } = default!;

    public DateTime CreateDate { get; set; }
}