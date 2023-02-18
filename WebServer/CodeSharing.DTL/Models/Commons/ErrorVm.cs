namespace CodeSharing.DTL.Models.Commons;

public class ErrorVm
{
    public string RequestId { get; set; } = default!;

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}