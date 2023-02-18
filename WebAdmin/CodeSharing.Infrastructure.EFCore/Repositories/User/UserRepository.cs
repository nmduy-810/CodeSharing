using CodeSharing.Core.Resources.Constants;
using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using CodeSharing.Core.Models.Pagination;
using CodeSharing.DTL.Models.Contents.Post;
using CodeSharing.DTL.Models.Systems.Function;
using CodeSharing.DTL.Models.Systems.Role;
using CodeSharing.DTL.Models.Systems.User;
using CodeSharing.Infrastructure.EFCore.Repositories.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CodeSharing.Infrastructure.EFCore.Repositories.User;

public class UserRepository : GenericRepository<ApplicationDbContext>, IUserRepository
{
    private readonly UserManager<CdsUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ILogger<UserRepository> _logger;

    public UserRepository(ApplicationDbContext context, UserManager<CdsUser> userManager, 
        RoleManager<IdentityRole> roleManager, ILogger<UserRepository> logger) : base(context)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _logger = logger;
    }
    
    public async Task<List<UserVm>> GetUsers()
    {
        try
        {
            var items = await _userManager.Users.Select(u => new UserVm
            {
                Id = u.Id,
                UserName = u.UserName,
                Birthday = u.Birthday,
                Email = u.Email,
                PhoneNumber = u.PhoneNumber,
                FirstName = u.FirstName,
                LastName = u.LastName,
                CreateDate = u.CreateDate
            }).ToListAsync();
        
            return items;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<UserVm>();
        }
    }

    public async Task<Pagination<UserVm>> GetUsersPaging(int pageIndex, int pageSize)
    {
        try
        {
            var query = _userManager.Users;
        
            var totalRecords = await query.CountAsync();
            var items = await query.Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .Select(u => new UserVm()
                {
                    Id = u.Id,
                    UserName = u.UserName,
                    FullName = string.Concat(u.FirstName, " ", u.LastName),
                    Birthday = u.Birthday,
                    Email = u.Email,
                    PhoneNumber = u.PhoneNumber,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    CreateDate = u.CreateDate
                })
                .ToListAsync();

            var pagination = new Pagination<UserVm>
            {
                Items = items,
                TotalRecords = totalRecords,
            };
        
            return pagination;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new Pagination<UserVm>();
        }
    }

    public async Task<UserVm?> GetById(string id)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return null;

            var roles = await _userManager.GetRolesAsync(user);
        
            var item = new UserVm
            {
                Id = user.Id,
                UserName = user.UserName,
                Birthday = user.Birthday,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                FirstName = user.FirstName,
                LastName = user.LastName,
                CreateDate = user.CreateDate,
                Roles = roles.ToList()
            };

            return item;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new UserVm();
        }
    }

    public async Task<bool> PostUser(UserCreateRequest request)
    {
        try
        {
            var user = new CdsUser
            {
                Id = Guid.NewGuid().ToString(),
                Email = request.Email,
                Birthday = request.Birthday,
                UserName = request.UserName,
                LastName = request.LastName,
                FirstName = request.FirstName,
                PhoneNumber = request.PhoneNumber
            };
        
            var result = await _userManager.CreateAsync(user, request.Password);
            return result.Succeeded;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> PutUser(string id, UserCreateRequest request)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return false;

            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Birthday = request.Birthday;

            var result = await _userManager.UpdateAsync(user);
            return result.Succeeded;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> PutUserPassword(string id, UserPasswordChangeRequest request)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return false;

            var result = await _userManager.ChangePasswordAsync(user, request.CurrentPassword, request.NewPassword);
            return result.Succeeded;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> DeleteUser(string id)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return false;

            var adminUsers = await _userManager.GetUsersInRoleAsync(SystemConstant.Roles.Admin);
            var otherUsers = adminUsers.Where(x => x.Id != id).ToList();
            if (otherUsers.Count == 0)
                return false;
        
            var result = await _userManager.DeleteAsync(user);
            return result.Succeeded;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<List<FunctionVm>> GetMenuByUserPermission(string userId)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId);
            var roles = await _userManager.GetRolesAsync(user);
            var query = from f in _context.CdsFunctions
                join p in _context.CdsPermissions on f.Id equals p.FunctionId
                join r in _roleManager.Roles on p.RoleId equals r.Id
                join a in _context.CdsCommands on p.CommandId equals a.Id
                where roles.Contains(r.Name) && a.Id == "VIEW"
                select new FunctionVm
                {
                    Id = f.Id,
                    Name = f.Name,
                    Url = f.Url,
                    ParentId = f.ParentId,
                    SortOrder = f.SortOrder,
                    Icon = f.Icon
                };
            var data = await query.Distinct()
                .OrderBy(x => x.ParentId)
                .ThenBy(x => x.SortOrder)
                .ToListAsync();
            return data;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<FunctionVm>();
        }
    }

    public async Task<IList<string>?> GetUserRoles(string userId)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
                return null;

            var roles = await _userManager.GetRolesAsync(user);
            return roles;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new List<string>();
        }
    }

    public async Task<bool> PostRolesToUserUser(string userId, RoleAssignRequest request)
    {
        try
        {
            if (request.RoleNames.Length == 0)
                return false;

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) 
                return false;

            var result = await _userManager.AddToRolesAsync(user, request.RoleNames);
            return result.Succeeded;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<bool> RemoveRolesFromUser(string userId, RoleAssignRequest request)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                return false;

            if (request.RoleNames.Length == 0)
                return false;

            if (request.RoleNames.Length == 1 && request.RoleNames[0] == SystemConstant.Roles.Admin &&
                user.UserName == "admin")
                return false;

            var result = await _userManager.RemoveFromRolesAsync(user, request.RoleNames);
            return result.Succeeded;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return false;
        }
    }

    public async Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize)
    {
        try
        {
            var query = from p in _context.CdsPosts
                join c in _context.CdsCategories on p.CategoryId equals c.Id
                where p.OwnerUserId == userId
                orderby p.CreateDate descending
                select new { p, c };

            var totalRecords = await query.CountAsync();

            var items = await query.Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .Select(x => new PostQuickVm
                {
                    Id = x.p.Id,
                    CategoryId = x.p.CategoryId,
                    Slug = x.p.Slug,
                    Title = x.p.Title,
                    Summary = x.p.Summary,
                    Content = x.p.Content,
                    CategorySlug = x.c.Slug,
                    CategoryTitle = x.c.Title,
                    NumberOfVotes = x.p.NumberOfVotes,
                    CreateDate = x.p.CreateDate,
                    ViewCount = x.p.ViewCount
                }).ToListAsync();

            var pagination = new Pagination<PostQuickVm>
            {
                Items = items,
                TotalRecords = totalRecords,
                PageIndex = pageIndex,
                PageSize = pageSize
            };

            return pagination;
        }
        catch (Exception e)
        {
            _logger.LogError("{Message}", e.Message);
            return new Pagination<PostQuickVm>();
        }
    }
}