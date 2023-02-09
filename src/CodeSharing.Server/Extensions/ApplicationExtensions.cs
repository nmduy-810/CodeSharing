using CodeSharing.Server.Middleware;

namespace CodeSharing.Server.Extensions;

public  static class ApplicationExtensions
{
    const string CodeSharingSpecificOrigins = "CodeSharingSpecificOrigins";
    
    public static void UseInfrastructure(this IApplicationBuilder app, IWebHostEnvironment environment)
    {
        if (environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.OAuthClientId("swagger");
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "CodeSharing API V1");
            });
            app.UseDeveloperExceptionPage();
        }
        else
        {
            // Security Headers ( before UseStaticFiles() )
            app.UseHsts(hsts => hsts.MaxAge(365).IncludeSubdomains().Preload());
            app.UseXContentTypeOptions();
            app.UseReferrerPolicy(opts => opts.NoReferrer());
            app.UseXXssProtection(options => options.EnabledWithBlockMode());
            app.UseXfo(options => options.Deny());
        }
        
        //app.UseErrorWrapping();

        app.UseStaticFiles();

        app.UseIdentityServer();

        app.UseAuthentication();

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseAuthorization();

        app.UseCors(CodeSharingSpecificOrigins);

        //app.UseResponseFormatterMiddleware(); // show took (calculate amount times of the api executes)

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapDefaultControllerRoute();
            endpoints.MapRazorPages();
        });
    }
}