using CodeSharing.Utilities.Helpers;

namespace CodeSharing.Server.Extensions;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseErrorWrapping(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ErrorWrappingMiddleware>();
    }
}