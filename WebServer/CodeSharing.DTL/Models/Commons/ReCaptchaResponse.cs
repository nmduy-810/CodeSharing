namespace CodeSharing.DTL.Models.Commons;

public class ReCaptchaResponse
{
    public bool Success { get; set; }
    public string Challenge_ts { get; set; } = default!;
    public string Hostname { get; set; } = default!;
    public string[] Errorcodes { get; set; } = default!;
}