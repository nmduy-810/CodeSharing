using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.Infrastructure.EFCore.Provider;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Datas.Initialize;

public class DbInitializer
{
    private const string AdminRoleName = "Admin";
    private const string UserRoleName = "Member";
    private readonly ApplicationDbContext _context;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<CdsUser> _userManager;

    public DbInitializer(ApplicationDbContext context, UserManager<CdsUser> userManager,
        RoleManager<IdentityRole> roleManager)
    {
        _context = context;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task Seed()
    {
        #region Role

        if (!_roleManager.Roles.Any())
        {
            await _roleManager.CreateAsync(new IdentityRole
            {
                Id = AdminRoleName,
                Name = AdminRoleName,
                NormalizedName = AdminRoleName.ToUpper()
            });
            await _roleManager.CreateAsync(new IdentityRole
            {
                Id = UserRoleName,
                Name = UserRoleName,
                NormalizedName = UserRoleName.ToUpper()
            });
        }

        #endregion Role

        #region User

        if (!_userManager.Users.Any())
        {
            var admin = await _userManager.CreateAsync(new CdsUser
            {
                Id = Guid.NewGuid().ToString(),
                UserName = "admin",
                FirstName = "Code",
                LastName = "Sharing",
                Email = "codesharing.contact@gmail.com",
                LockoutEnabled = false
            }, "Admin@123");
            if (admin.Succeeded)
            {
                var user = await _userManager.FindByNameAsync("admin");
                await _userManager.AddToRoleAsync(user, AdminRoleName);
            }
        }

        #endregion User

        #region Function

        if (!_context.CdsFunctions.Any())
        {
            _context.CdsFunctions.AddRange(new List<CdsFunction>
            {
                new()
                {
                    Id = "DASHBOARD",
                    Name = "Thống kê",
                    ParentId = null,
                    SortOrder = 1,
                    Url = "/dashboard",
                    Icon = "fa-dashboard"
                },

                new()
                {
                    Id = "CONTENT",
                    Name = "Nội dung",
                    ParentId = null,
                    Url = "/contents",
                    Icon = "fa-table"
                },

                new()
                {
                    Id = "CONTENT_CATEGORY",
                    Name = "Danh mục",
                    ParentId = "CONTENT",
                    Url = "/contents/categories"
                },
                new()
                {
                    Id = "CONTENT_POST",
                    Name = "Bài viết",
                    ParentId = "CONTENT",
                    SortOrder = 2,
                    Url = "/content/posts",
                    Icon = "fa-edit"
                },
                new()
                {
                    Id = "CONTENT_COMMENT",
                    Name = "Trang",
                    ParentId = "CONTENT",
                    SortOrder = 3,
                    Url = "/contents/comments",
                    Icon = "fa-edit"
                },
                new()
                {
                    Id = "CONTENT_REPORT",
                    Name = "Báo xấu",
                    ParentId = "CONTENT",
                    SortOrder = 3,
                    Url = "/contents/reports",
                    Icon = "fa-edit"
                },

                new()
                {
                    Id = "STATISTIC",
                    Name = "Thống kê",
                    ParentId = null,
                    Url = "/statistics",
                    Icon = "fa-bar-chart-o"
                },

                new()
                {
                    Id = "STATISTIC_MONTHLY_NEWMEMBER",
                    Name = "Đăng ký từng tháng",
                    ParentId = "STATISTIC",
                    SortOrder = 1,
                    Url = "/statistics/monthly-registers",
                    Icon = "fa-wrench"
                },
                new()
                {
                    Id = "STATISTIC_MONTHLY_NEWKB",
                    Name = "Bài đăng hàng tháng",
                    ParentId = "STATISTIC",
                    SortOrder = 2,
                    Url = "/statistics/monthly-newkbs",
                    Icon = "fa-wrench"
                },
                new()
                {
                    Id = "STATISTIC_MONTHLY_COMMENT",
                    Name = "Comment theo tháng",
                    ParentId = "STATISTIC",
                    SortOrder = 3,
                    Url = "/statistics/monthly-comments",
                    Icon = "fa-wrench"
                },

                new()
                {
                    Id = "SYSTEM",
                    Name = "Hệ thống",
                    ParentId = null,
                    Url = "/systems",
                    Icon = "fa-th-list"
                },

                new()
                {
                    Id = "SYSTEM_USER",
                    Name = "Người dùng",
                    ParentId = "SYSTEM",
                    Url = "/system/users",
                    Icon = "fa-desktop"
                },
                new()
                {
                    Id = "SYSTEM_ROLE",
                    Name = "Nhóm quyền",
                    ParentId = "SYSTEM",
                    Url = "/system/roles",
                    Icon = "fa-desktop"
                },
                new()
                {
                    Id = "SYSTEM_FUNCTION",
                    Name = "Chức năng",
                    ParentId = "SYSTEM",
                    Url = "/system/functions",
                    Icon = "fa-desktop"
                },
                new()
                {
                    Id = "SYSTEM_PERMISSION",
                    Name = "Quyền hạn",
                    ParentId = "SYSTEM",
                    Url = "/system/permissions",
                    Icon = "fa-desktop"
                }
            });
            await _context.SaveChangesAsync();
        }

        if (!_context.CdsCommands.Any())
            _context.CdsCommands.AddRange(new List<CdsCommand>
            {
                new() { Id = "VIEW", Name = "Xem" },
                new() { Id = "CREATE", Name = "Thêm" },
                new() { Id = "UPDATE", Name = "Sửa" },
                new() { Id = "DELETE", Name = "Xoá" },
                new() { Id = "APPROVE", Name = "Duyệt" }
            });

        #endregion Function

        #region CommandInFunction

        var functions = _context.CdsFunctions;

        if (!_context.CdsCommandInFunctions.Any())
            foreach (var function in functions)
            {
                var createAction = new CdsCommandInFunction
                {
                    CommandId = "CREATE",
                    FunctionId = function.Id
                };
                _context.CdsCommandInFunctions.Add(createAction);

                var updateAction = new CdsCommandInFunction
                {
                    CommandId = "UPDATE",
                    FunctionId = function.Id
                };
                _context.CdsCommandInFunctions.Add(updateAction);
                var deleteAction = new CdsCommandInFunction
                {
                    CommandId = "DELETE",
                    FunctionId = function.Id
                };
                _context.CdsCommandInFunctions.Add(deleteAction);

                var viewAction = new CdsCommandInFunction
                {
                    CommandId = "VIEW",
                    FunctionId = function.Id
                };
                _context.CdsCommandInFunctions.Add(viewAction);
            }

        if (!_context.CdsPermissions.Any())
        {
            var adminRole = await _roleManager.FindByNameAsync(AdminRoleName);
            foreach (var function in functions)
            {
                _context.CdsPermissions.Add(new CdsPermission(function.Id, adminRole.Id, "CREATE"));
                _context.CdsPermissions.Add(new CdsPermission(function.Id, adminRole.Id, "UPDATE"));
                _context.CdsPermissions.Add(new CdsPermission(function.Id, adminRole.Id, "DELETE"));
                _context.CdsPermissions.Add(new CdsPermission(function.Id, adminRole.Id, "VIEW"));
            }

            var memberRole = await _roleManager.FindByNameAsync(UserRoleName);
            foreach (var function in functions)
                _context.CdsPermissions.Add(new CdsPermission(function.Id, memberRole.Id, "VIEW"));
        }

        #endregion CommandInFunction

        #region Category

        if (!_context.CdsCategories.Any())
        {
            _context.CdsCategories.AddRange(new List<CdsCategory>
            {
                new()
                {
                    ParentCategoryId = null,
                    Title = "C#",
                    Slug = "C-Sharp",
                    SortOrder = 1,
                    CreateDate = DateTime.Now,
                    IsParent = true
                },
                new()
                {
                    ParentCategoryId = 1,
                    Title = "NET Framework",
                    Slug = "NET-Framework",
                    SortOrder = 1,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
                new()
                {
                    ParentCategoryId = 1,
                    Title = "NET Core",
                    Slug = "NET-Core",
                    SortOrder = 2,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
                new()
                {
                    ParentCategoryId = null,
                    Title = "Angular",
                    Slug = "Angular",
                    SortOrder = 2,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
                new()
                {
                    ParentCategoryId = null,
                    Title = "SQL",
                    Slug = "SQL",
                    SortOrder = 3,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
            });
        }
        
        #endregion Category

        #region Labels

        if (!_context.CdsLabels.Any())
        {
            _context.CdsLabels.AddRange(new List<CdsLabel>
            {
                new()
                {
                    Id = "Technology",
                    Name = "Technology"
                },
                new()
                {
                    Id = "Programming",
                    Name = "Programming"
                },
                new()
                {
                    Id = "Development",
                    Name = "Development"
                },
                new()
                {
                    Id = "Angular",
                    Name = "Angular"
                },
                new()
                {
                    Id = "CSharp",
                    Name = "C#"
                },
                new()
                {
                    Id = "NETCore",
                    Name = "NETCore"
                },
                new()
                {
                    Id = "NETFramework",
                    Name = "NETFramework"
                },
                new()
                {
                    Id = "SQL",
                    Name = "SQL"
                }
            });
        }

        #endregion Labels

        #region Contact

        if (!_context.CdsContacts.Any())
            _context.CdsContacts.AddRange(new CdsContact
            {
                Email = "codesharing.contact@gmail.com",
                Location = "Thành phố Hồ Chí Minh, Việt Nam",
                Phone = "0969 772 069"
            });

        #endregion Contact

        await _context.SaveChangesAsync();
    }
}