using CodeSharing.Core.Services.Utils;
using CodeSharing.Core.Services.Utils.Interfaces;
using CodeSharing.DTL;
using CodeSharing.Server.AdditionalServices;
using CodeSharing.Server.AdditionalServices.Interfaces;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Server.Datas.Initialize;
using CodeSharing.Server.IdentityServer;
using CodeSharing.Server.Middleware;
using CodeSharing.Server.Repositories;
using CodeSharing.Server.Repositories.Intefaces;
using CodeSharing.Server.Services;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.DTL.Models.Commons;
using CodeSharing.Infrastructure.EFCore;
using CodeSharing.Infrastructure.EFCore.Provider;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;

namespace CodeSharing.Server.Extensions;

public static class ServiceExtensions
{
    static string CodeSharingSpecificOrigins = "CodeSharingSpecificOrigins";
    
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        // Configure database
        services.ConfigureApplicationDbContext(configuration);
        
        // Add Identity
        services.AddIdentity(configuration);
        
        // Add Cors
        services.AddCors(configuration);
        
        // Configure Identity
        services.ConfigureIdentityOptions();

        services.ConfigureApiBehaviourOptions();
        
        // Setup token
        services.ConfigureTokenIdentityCore();
        
        // Add controllers
        services.AddControllersWithViews();
        
        // Configure Authentication
        services.ConfigureAuthentication(configuration);
        
        // Configure Authorization
        services.ConfigureAuthorization();
        
        services.ConfigureRazorPages();
        
        // Add DbInitializer using Seeding data
        services.AddTransient<DbInitializer>();
        
        // Config use options
        services.AddOptions();

        services.AddInfrastructureServices(configuration);
        
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "CodeSharing API", Version = "v1" });

            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Type = SecuritySchemeType.OAuth2,
                Flows = new OpenApiOAuthFlows
                {
                    Implicit = new OpenApiOAuthFlow
                    {
                        AuthorizationUrl = new Uri("https://localhost:5000/connect/authorize"),
                        Scopes = new Dictionary<string, string> { { "api.codesharing", "CodeSharing API" } }
                    }
                }
            });
            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
                    },
                    new List<string> { "api.codesharing" }
                }
            });
        });
        
        // Config Distributed Cache
        services.AddDistributedSqlServerCache(o =>
        {
            o.ConnectionString = configuration.GetConnectionString("DefaultConnection");
            o.SchemaName = "dbo";
            o.TableName = "CacheTable";
        });
        
        return services;
    }
    
    private static void AddIdentity(this IServiceCollection services,
        IConfiguration configuration)
    {
        // Setup Identity
        services.AddIdentity<CdsUser, IdentityRole>()
            .AddEntityFrameworkStores<ApplicationDbContext>();
        
        services.AddIdentityServer(options =>
            {
                options.Events.RaiseErrorEvents = true;
                options.Events.RaiseInformationEvents = true;
                options.Events.RaiseFailureEvents = true;
                options.Events.RaiseSuccessEvents = true;
            })
            .AddInMemoryApiResources(Config.Apis)
            .AddInMemoryClients(configuration.GetSection("IdentityServer:Clients"))
            .AddInMemoryIdentityResources(Config.Ids)
            .AddInMemoryApiScopes(Config.ApiScopes)
            .AddAspNetIdentity<CdsUser>()
            .AddProfileService<IdentityProfileService>()
            .AddDeveloperSigningCredential();
    }

    private static void AddCors(this IServiceCollection services,
        IConfiguration configuration)
    {
        // Setup CORS (Cross Orgin Resouces)
        services.AddCors(options =>
        {
            options.AddPolicy(CodeSharingSpecificOrigins,
                corsPolicyBuilder =>
                {
                    corsPolicyBuilder.WithOrigins(configuration["AllowOrigins"])
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
        });
    }

    private static void ConfigureIdentityOptions(this IServiceCollection services)
    {
        services.Configure<IdentityOptions>(options =>
        {
            // Default Lockout settings.
            options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(2); // Khóa tài khoản 2 phút nếu đăng nhập sai
            options.Lockout.MaxFailedAccessAttempts = 5; // Thất bại 3 lần thì khóa
            options.Lockout.AllowedForNewUsers = true;
            options.SignIn.RequireConfirmedPhoneNumber = false;
            options.SignIn.RequireConfirmedAccount = false;
            options.SignIn.RequireConfirmedEmail = false;
            options.Password.RequiredLength = 8;
            options.Password.RequireDigit = true;
            options.Password.RequireUppercase = true;
            options.User.RequireUniqueEmail = true;
        });
    }

    private static void ConfigureTokenIdentityCore(this IServiceCollection services)
    {
        // Setup token when reset password using identity
        services.AddIdentityCore<CdsUser>(options => options.SignIn.RequireConfirmedAccount = true)
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddTokenProvider<DataProtectorTokenProvider<CdsUser>>(TokenOptions.DefaultProvider);
    }

    private static void ConfigureAuthentication(this IServiceCollection services, IConfiguration configuration)
    {
        // Add more external login
        services.AddAuthentication()
            .AddLocalApi("Bearer", option => { option.ExpectedScope = "api.codesharing"; })
            .AddGoogle(googleOptions =>
            {
                // Read authentication google information from appsettings.xxx.json
                IConfiguration googleAuthSection = configuration.GetSection("Authentication:Google");

                // Establish Client Id and Client Secret allow access API google
                googleOptions.ClientId = googleAuthSection["ClientId"];
                googleOptions.ClientSecret = googleAuthSection["ClientSecret"];

                // Config callback url from google ( default callback url: /signin-google )
                googleOptions.CallbackPath = "/dang-nhap-tu-google";
            })
            .AddFacebook(facebookOptions =>
            {
                // Read authentication google information from appsettings.xxx.json
                IConfiguration facebookAuthSection = configuration.GetSection("Authentication:Facebook");

                // Establish Client Id and Client Secret allow access API google
                facebookOptions.ClientId = facebookAuthSection["ClientId"];
                facebookOptions.ClientSecret = facebookAuthSection["ClientSecret"];

                // Config callback url from google ( default callback url: /signin-google )
                facebookOptions.CallbackPath = "/dang-nhap-tu-facebook";
            });
    }

    private static void ConfigureAuthorization(this IServiceCollection services)
    {
        services.AddAuthorization(options =>
        {
            options.AddPolicy("Bearer", policy =>
            {
                policy.AddAuthenticationSchemes("Bearer");
                policy.RequireAuthenticatedUser();
            });
        });
    }

    private static void ConfigureRazorPages(this IServiceCollection services)
    {
        services.AddRazorPages(options =>
        {
            options.Conventions.AddAreaFolderRouteModelConvention("Identity", "/Account/", model =>
            {
                foreach (var selector in model.Selectors)
                {
                    var attributeRouteModel = selector.AttributeRouteModel;
                    if (attributeRouteModel == null)
                        continue;

                    attributeRouteModel.Order = -1;
                    attributeRouteModel.Template = attributeRouteModel.Template?.Remove(0, "Identity".Length);
                }
            });
        });
    }

    private static void ConfigureApiBehaviourOptions(this IServiceCollection services)
    {
        services.Configure<ApiBehaviorOptions>(options => { options.SuppressModelStateInvalidFilter = true; });
        services.Configure<ApiBehaviorOptions>(options => { options.InvalidModelStateResponseFactory = ctx => new ModelStateFeatureFilter(); });
    }

    private static void AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        // Register in Identity require have EmailSender (Additional Services)
        services.AddTransient<IEmailSender, EmailSenderService>();
        services.AddTransient<ISequenceService, SequenceService>();
        services.AddTransient<IStorageService, FileStorageService>();
        services.AddTransient<ICacheService, DistributedCacheService>();
        services.Configure<MailSettings>(configuration.GetSection("MailSettings"));
        services.AddTransient<IViewRenderService, ViewRenderService>();
        services.AddTransient<ISerializeService, SerializeService>();

        services.AddAutoMapper(c => { c.AddProfile<EfCoreMapperProfile>(); });

        // Register Services and Repositories
        services.AddScoped(typeof(IGenericRepository<,>), typeof(GenericRepository<,>));
        services
            .AddScoped<IContactRepository, ContactRepository>()
            .AddScoped<IContactService, ContactService>();
        services
            .AddScoped<ISupportRepository, SupportRepository>()
            .AddScoped<ISupportService, SupportService>();
        services
            .AddScoped<ICategoryRepository, CategoryRepository>()
            .AddScoped<ICategoryService, CategoryService>();
        services
            .AddScoped<IAboutRepository, AboutRepository>()
            .AddScoped<IAboutService, AboutService>();
        services
            .AddScoped<IFunctionRepository, FunctionRepository>()
            .AddScoped<IFunctionService, FunctionService>();
        services
            .AddScoped<ILabelRepository, LabelRepository>()
            .AddScoped<ILabelService, LabelService>();
        services
            .AddScoped<IUserRepository, UserRepository>()
            .AddScoped<IUserService, UserService>();
        services
            .AddScoped<IStatisticRepository, StatisticRepository>()
            .AddScoped<IStatisticService, StatisticService>();
        services
            .AddScoped<IPostRepository, PostRepository>()
            .AddScoped<IPostService, PostService>();
        services
            .AddScoped<ICommandRepository, CommandRepository>()
            .AddScoped<ICommandService, CommandService>();
        services
            .AddScoped<IRoleRepository, RoleRepository>()
            .AddScoped<IRoleService, RoleService>();
        services.AddScoped<IUploadRepository, UploadRepository>();
        services.AddScoped(typeof(ICoreRepository<>), typeof(CoreRepository<>));
        services.AddScoped<IBaseService, BaseService>();
        services.AddScoped<IUtils, Utils>();
    }
}