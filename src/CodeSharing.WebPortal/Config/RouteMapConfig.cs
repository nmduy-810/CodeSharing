using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Config;

public static class RouteMapConfig
{
    public static void RoutingBuilder(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
        
        endpoints.MapControllerRoute(
            name: "postDetails",
            "/post/{slug}-{id}",
            new {controller = "Post", action = "Details"});

        endpoints.MapControllerRoute(
            name: "about",
            pattern: "/about",
            new { controller = "About", action = "Index" });
        
        endpoints.MapControllerRoute(
            name: "contact",
            pattern: "/contact",
            new { controller = "Contact", action = "Index" });

        endpoints.MapControllerRoute(
            name: "listByCategoryId",
            pattern: "/category/{categorySlug}-{id}",
            new { controller = "Post", action = "ListByCategoryId" });

        endpoints.MapControllerRoute(
            name: "listByTagId",
            pattern: "/tag/{id}",
            new { controller = "Post", action = "ListByTagId" });
        
        endpoints.MapControllerRoute(
            name: "Search",
            pattern: "/search",
            new { controller = "Post", action = "Search" });
        
        endpoints.MapControllerRoute(
            name: "editPost",
            pattern: "/edit-post/{id}",
            new { controller = "Account", action = "EditPost" });
        
        endpoints.MapControllerRoute(
            name: "deletePost",
            pattern: "/delete-post/{id}",
            new { controller = "Account", action = "DeletePost" });

        endpoints.MapControllerRoute(
            name: "newPost",
            pattern: "/new-post",
            new { controller = "Account", action = "CreateNewPost" });

    }
}