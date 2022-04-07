using CodeSharing.Utilities.Helpers;

namespace CodeSharing.Server.Extensions;

public static class MiddlewareExtensions
{
    public static void UseErrorWrapping(this IApplicationBuilder builder)
    {
        builder.UseMiddleware<ErrorWrappingMiddleware>();
    }
}