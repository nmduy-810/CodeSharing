namespace CodeSharing.WebPortal.Config;

public static class RouteMapConfig
{
    public static void RoutingBuilder(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapControllerRoute(
            "default",
            "{controller=Home}/{action=Index}/{id?}");

        endpoints.MapControllerRoute(
            "postDetails",
            "/post/{slug}-{id}",
            new { controller = "Post", action = "Details" });

        endpoints.MapControllerRoute(
            "about",
            "/about",
            new { controller = "About", action = "Index" });

        endpoints.MapControllerRoute(
            "contact",
            "/contact",
            new { controller = "Contact", action = "Index" });

        endpoints.MapControllerRoute(
            "listByCategoryId",
            "/category/{categorySlug}-{id}",
            new { controller = "Post", action = "ListByCategoryId" });

        endpoints.MapControllerRoute(
            "listByTagId",
            "/tag/{id}",
            new { controller = "Post", action = "ListByTagId" });

        endpoints.MapControllerRoute(
            "Search",
            "/search",
            new { controller = "Post", action = "Search" });

        endpoints.MapControllerRoute(
            "editPost",
            "/edit-post/{id}",
            new { controller = "Account", action = "EditPost" });

        endpoints.MapControllerRoute(
            "deletePost",
            "/delete-post/{id}",
            new { controller = "Account", action = "DeletePost" });

        endpoints.MapControllerRoute(
            "newPost",
            "/new-post",
            new { controller = "Account", action = "CreateNewPost" });
    }
}