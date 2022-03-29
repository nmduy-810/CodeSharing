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
    }
}