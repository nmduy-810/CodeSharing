using CodeSharing.Server.Datas.Initialize;
using CodeSharing.Server.Extensions;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

Log.Information("Starting Code Sharing API up");

try
{
    // Add host to the container from ConfigureHostExtensions.cs
    builder.Host.AddAppConfigurations();

    // Add services to the container from ServiceExtension.cs
    builder.Services.AddInfrastructure(builder.Configuration);

    var enviroment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
    if (enviroment == Environments.Development) 
        builder.Services.AddRazorPages().AddRazorRuntimeCompilation();

    var app = builder.Build();

    #region Serilog
    Log.Logger = new LoggerConfiguration()
        .Enrich.FromLogContext()
        .WriteTo.Console()
        .CreateLogger();

    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        try
        {
            Log.Information("Seeding data...");
            var dbInitializer = services.GetService<DbInitializer>();
            dbInitializer?.Seed().Wait();
        }
        catch (Exception e)
        {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(e, "An error occured while seeding the database");
        }
    }
    #endregion Serilog

    // Add app to the container from ApplicationExtensions.cs
    app.UseInfrastructure(app.Environment);

    app.Run();
}
catch (Exception exception)
{
    var type = exception.GetType().Name;
    if (type.Equals("StopTheHostException", StringComparison.Ordinal)) // If migration fail, block fail
        throw;

    Log.Fatal(exception, "Unhandled exception: {ExceptionMessage}", exception.Message);
}
finally
{
    Log.Information("Shut down Code Sharing API complete");
    Log.CloseAndFlush();
}