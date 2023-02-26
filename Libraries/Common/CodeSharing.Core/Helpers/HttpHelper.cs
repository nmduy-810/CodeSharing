using Microsoft.AspNetCore.Http;

namespace CodeSharing.Core.Helpers;

public static class HttpHelper
{
    public static string GetBaseUrl(IHttpContextAccessor context)
    {
        var request = context.HttpContext?.Request;
        var baseUrl = $"{request?.Scheme}://{request?.Host}/";
        return baseUrl;
    }
}