using Serilog;

namespace CodeSharing.Server.Extensions;

public static class ConfigureHostExtensions
{
    public static void AddAppConfigurations(this ConfigureHostBuilder host)
    {
        host.UseSerilog((hostingContext, loggerConfiguration) =>
            loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration));
    }
}