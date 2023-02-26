namespace CodeSharing.Core.Utils;

public static class Extension
{
    public static bool IsNotEmpty<T>(this IEnumerable<T>? list) => list != null && list.Any();
}