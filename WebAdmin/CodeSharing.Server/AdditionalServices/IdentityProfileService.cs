using System.Security.Claims;
using CodeSharing.Core.Resources.Constants;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace CodeSharing.Server.AdditionalServices;

public class IdentityProfileService : IProfileService
{
    private readonly IUserClaimsPrincipalFactory<CdsUser> _claimsPrincipalFactory;
    private readonly ApplicationDbContext _context;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<CdsUser> _userManager;

    public IdentityProfileService(IUserClaimsPrincipalFactory<CdsUser> claimsPrincipalFactory,
        UserManager<CdsUser> userManager, ApplicationDbContext context, RoleManager<IdentityRole> roleManager)
    {
        _claimsPrincipalFactory = claimsPrincipalFactory;
        _userManager = userManager;
        _context = context;
        _roleManager = roleManager;
    }

    public async Task GetProfileDataAsync(ProfileDataRequestContext context)
    {
        var sub = context.Subject.GetSubjectId();
        var user = await _userManager.FindByIdAsync(sub);
        if (user == null) throw new ArgumentException("");

        var principal = await _claimsPrincipalFactory.CreateAsync(user);
        var claims = principal.Claims.ToList();
        var roles = await _userManager.GetRolesAsync(user);

        var query = from p in _context.CdsPermissions
            join c in _context.CdsCommands
                on p.CommandId equals c.Id
            join f in _context.CdsFunctions
                on p.FunctionId equals f.Id
            join r in _roleManager.Roles on p.RoleId equals r.Id
            where roles.Contains(r.Name)
            select f.Id + "_" + c.Id;

        var permissions = await query.Distinct().ToListAsync();

        //Add more claims like this
        claims.Add(new Claim(ClaimTypes.Name, user.UserName));
        claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
        claims.Add(new Claim(ClaimTypes.Role, string.Join(";", roles)));
        claims.Add(new Claim(SystemConstant.Claims.Permissions, JsonConvert.SerializeObject(permissions)));

        context.IssuedClaims = claims;
    }

    public async Task IsActiveAsync(IsActiveContext context)
    {
        var subjectId = context.Subject.GetSubjectId();
        var user = await _userManager.FindByIdAsync(subjectId);
        context.IsActive = user != null;
    }
}