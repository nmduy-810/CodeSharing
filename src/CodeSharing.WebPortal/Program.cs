using CodeSharing.WebPortal.Config;
using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.Services;
using Microsoft.Extensions.DependencyInjection.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add HttpClient
builder.Services.AddHttpClient();

// Add services to the container.
builder.Services.AddControllersWithViews();

//Connect to server
var enviroment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
if (enviroment == Environments.Development)
{
    builder.Services.AddRazorPages().AddRazorRuntimeCompilation();
}

// Add DI Containers
builder.Services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddTransient<ICategoryApiClient, CategoryApiClient>();
builder.Services.AddTransient<IPostApiClient, PostApiClient>();
builder.Services.AddTransient<ILabelApiClient, LabelApiClient>();
builder.Services.AddTransient<IContactApiClient, ContactApiClient>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(RouteMapConfig.RoutingBuilder);

app.Run();