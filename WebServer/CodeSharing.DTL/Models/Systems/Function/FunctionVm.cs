namespace CodeSharing.DTL.Models.Systems.Function;

public class FunctionVm
{
    public string Id { get; set; } = default!;
    public string Name { get; set; } = default!;
    public string Url { get; set; } = default!;
    public int SortOrder { get; set; }
    public string? ParentId { get; set; }
    public string? Icon { get; set; }
}