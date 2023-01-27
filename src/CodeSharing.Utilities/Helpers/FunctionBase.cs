using Microsoft.AspNetCore.Http;

namespace CodeSharing.Utilities.Helpers;

public static class FunctionBase
{
    public static IEnumerable<byte> GetByteArrayFromImage(IFormFile file)
    {
        using var target = new MemoryStream();
        file.CopyTo(target);
        return target.ToArray();
    }

    public static string ConvertToBase64(IFormFile file)
    {
        var result = string.Empty;
        if (file.Length <= 0)
            return result;

        using var ms = new MemoryStream();
        file.CopyTo(ms);
        var fileBytes = ms.ToArray();
        result = Convert.ToBase64String(fileBytes);
        return result;
    }

    public static string GetBaseUrl(IHttpContextAccessor context)
    {
        var request = context.HttpContext?.Request;
        var baseUrl = $"{request?.Scheme}://{request?.Host}/";
        return baseUrl;
    }

    public static string GenerateFileName(string context)
    {
        return context + "_" + DateTime.Now.ToString("yyyyMMddHHmmss") + "_" + Guid.NewGuid().ToString("N");
    }
    
    
}