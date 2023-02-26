namespace CodeSharing.Core.Helpers;

public static class FileHelper
{
    public static string GenerateFileName(string context)
    {
        return context + "_" + DateTime.Now.ToString("yyyyMMddHHmmss") + "_" + Guid.NewGuid().ToString("N");
    }
}