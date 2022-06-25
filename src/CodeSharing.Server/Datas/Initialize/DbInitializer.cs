using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Datas.Initialize;

public class DbInitializer
{
    private const string AdminRoleName = "Admin";
    private const string UserRoleName = "Member";
    private readonly ApplicationDbContext _context;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<User> _userManager;

    public DbInitializer(ApplicationDbContext context, UserManager<User> userManager,
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
            var admin = await _userManager.CreateAsync(new User
            {
                Id = Guid.NewGuid().ToString(),
                UserName = "admin",
                FirstName = "Quản trị",
                LastName = "1",
                Email = "codesharing@hotmail.com",
                LockoutEnabled = false
            }, "Admin@123");
            if (admin.Succeeded)
            {
                var user = await _userManager.FindByNameAsync("admin");
                await _userManager.AddToRoleAsync(user, AdminRoleName);
            }

            var member = await _userManager.CreateAsync(new User
            {
                Id = Guid.NewGuid().ToString(),
                UserName = "member",
                FirstName = "Thành viên",
                LastName = "1",
                Email = "member@hotmail.com",
                LockoutEnabled = false
            }, "Member@123");
            if (member.Succeeded)
            {
                var user = await _userManager.FindByNameAsync("member");
                await _userManager.AddToRoleAsync(user, UserRoleName);
            }
        }

        #endregion User

        #region Function

        if (!_context.Functions.Any())
        {
            _context.Functions.AddRange(new List<Function>
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

        if (!_context.Commands.Any())
            _context.Commands.AddRange(new List<Command>
            {
                new() { Id = "VIEW", Name = "Xem" },
                new() { Id = "CREATE", Name = "Thêm" },
                new() { Id = "UPDATE", Name = "Sửa" },
                new() { Id = "DELETE", Name = "Xoá" },
                new() { Id = "APPROVE", Name = "Duyệt" }
            });

        #endregion Function

        #region CommandInFunction

        var functions = _context.Functions;

        if (!_context.CommandInFunctions.Any())
            foreach (var function in functions)
            {
                var createAction = new CommandInFunction
                {
                    CommandId = "CREATE",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(createAction);

                var updateAction = new CommandInFunction
                {
                    CommandId = "UPDATE",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(updateAction);
                var deleteAction = new CommandInFunction
                {
                    CommandId = "DELETE",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(deleteAction);

                var viewAction = new CommandInFunction
                {
                    CommandId = "VIEW",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(viewAction);
            }

        if (!_context.Permissions.Any())
        {
            var adminRole = await _roleManager.FindByNameAsync(AdminRoleName);
            foreach (var function in functions)
            {
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "CREATE"));
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "UPDATE"));
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "DELETE"));
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "VIEW"));
            }

            var memberRole = await _roleManager.FindByNameAsync(UserRoleName);
            foreach (var function in functions)
                _context.Permissions.Add(new Permission(function.Id, memberRole.Id, "VIEW"));
        }

        #endregion CommandInFunction

        #region Post

        if (!_context.Posts.Any())
        {
            _context.Posts.AddRange(new List<Post>
            {
                new()
                {
                    Id = 1,
                    CategoryId = 1,
                    Title = "Lorem Ipsum 1",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-1",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 2,
                    CategoryId = 1,
                    Title = "Lorem Ipsum 2",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-2",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 3,
                    CategoryId = 1,
                    Title = "Lorem Ipsum 3",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-3",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 4,
                    CategoryId = 1,
                    Title = "Lorem Ipsum 4",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-4",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 5,
                    CategoryId = 1,
                    Title = "Lorem Ipsum 5",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-5",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 6,
                    CategoryId = 4,
                    Title = "Lorem Ipsum 6",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-6",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 7,
                    CategoryId = 5,
                    Title = "Lorem Ipsum 7",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-7",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 8,
                    CategoryId = 2,
                    Title = "Lorem Ipsum 8",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-8",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 9,
                    CategoryId = 3,
                    Title = "Lorem Ipsum 9",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-9",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 10,
                    CategoryId = 4,
                    Title = "Lorem Ipsum 10",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-10",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 11,
                    CategoryId = 1,
                    Title = "Lorem Ipsum 11",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-11",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 12,
                    CategoryId = 2,
                    Title = "Lorem Ipsum 12",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-12",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 13,
                    CategoryId = 3,
                    Title = "Lorem Ipsum 13",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-13",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 14,
                    CategoryId = 4,
                    Title = "Lorem Ipsum 14",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-14",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 15,
                    CategoryId = 5,
                    Title = "Lorem Ipsum 15",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-15",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 16,
                    CategoryId = 4,
                    Title = "Lorem Ipsum 16",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-16",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 17,
                    CategoryId = 2,
                    Title = "Lorem Ipsum 17",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-17",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 18,
                    CategoryId = 2,
                    Title = "Lorem Ipsum 18",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-18",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 19,
                    CategoryId = 3,
                    Title = "Lorem Ipsum 19",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-19",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                },
                new()
                {
                    Id = 20,
                    CategoryId = 3,
                    Title = "Lorem Ipsum 20",
                    Content =
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    Slug = "lorem-ipsum-20",
                    Note = "",
                    Labels = "test",
                    CreateDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now,
                    NumberOfComments = 0,
                    NumberOfReports = 0,
                    NumberOfVotes = 0,
                    ViewCount = 0
                }
            });

            #region Labels

            if (!_context.Labels.Any())
                _context.Labels.AddRange(new List<Label>
                {
                    new()
                    {
                        Id = "test",
                        Name = "test"
                    },
                    new()
                    {
                        Id = "tech",
                        Name = "tech"
                    },
                    new()
                    {
                        Id = "programming",
                        Name = "programming"
                    },
                    new()
                    {
                        Id = "development",
                        Name = "development"
                    },
                    new()
                    {
                        Id = "angular",
                        Name = "angular"
                    },
                    new()
                    {
                        Id = "csharp",
                        Name = "c#"
                    },
                    new()
                    {
                        Id = "net",
                        Name = "net"
                    },
                    new()
                    {
                        Id = "sql",
                        Name = "sql"
                    }
                });

            #endregion Labels

            #region LabelInPost

            if (!_context.LabelInPosts.Any())
                _context.LabelInPosts.AddRange(new List<LabelInPost>
                {
                    new()
                    {
                        PostId = 1,
                        LabelId = "test"
                    },
                    new()
                    {
                        PostId = 1,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 1,
                        LabelId = "programming"
                    },
                    new()
                    {
                        PostId = 1,
                        LabelId = "tech"
                    },
                    new()
                    {
                        PostId = 2,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 2,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 3,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 3,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 4,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 4,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 5,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 6,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 7,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 7,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 8,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 8,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 9,
                        LabelId = "development"
                    },
                    new()
                    {
                        PostId = 9,
                        LabelId = "csharp"
                    },
                    new()
                    {
                        PostId = 9,
                        LabelId = "programming"
                    },
                    new()
                    {
                        PostId = 10,
                        LabelId = "programming"
                    }
                });

            #endregion LabelInPost
        }

        #endregion Post

        #region Contact

        if (!_context.Contacts.Any())
            _context.Contacts.AddRange(new Contact
            {
                Email = "codesharing@hotmail.com",
                Location = "Thành phố Hồ Chí Minh, Việt Nam",
                Phone = "0969 772 069"
            });

        #endregion Contact

        await _context.SaveChangesAsync();
    }
}