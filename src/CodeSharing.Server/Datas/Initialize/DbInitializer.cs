using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;

namespace CodeSharing.Server.Datas.Initialize;

public class DbInitializer
{
    private readonly ApplicationDbContext _context;

    public DbInitializer(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Seed()
    {
        #region Post

        if (!_context.Posts.Any())
        {
            _context.Posts.AddRange(new List<Post>()
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
                },new()
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
            
            #endregion KnowledgeBase

            #region Labels
            if (!_context.Labels.Any())
            {
                _context.Labels.AddRange(new List<Label>()
                {
                    new()
                    {
                        Id = "test",
                        Name = "test",
                    },
                    new()
                    {
                        Id = "tech",
                        Name = "tech",
                    },
                    new()
                    {
                        Id = "programming",
                        Name = "programming",
                    },
                    new()
                    {
                        Id = "development",
                        Name = "development",
                    },
                    new()
                    {
                        Id = "angular",
                        Name = "angular",
                    },
                    new()
                    {
                        Id = "csharp",
                        Name = "c#",
                    },
                    new()
                    {
                        Id = "net",
                        Name = "net",
                    },
                    new()
                    {
                        Id = "sql",
                        Name = "sql",
                    }
                });
            }
            #endregion Labels
            
            #region LabelInKnowledgeBase

            if (!_context.LabelInPosts.Any())
            {
                _context.LabelInPosts.AddRange(new List<LabelInPost>()
                {
                    new()
                    {
                        PostId = 1,
                        LabelId = "test",
                    },
                    new()
                    {
                        PostId = 1,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 1,
                        LabelId = "programming",
                    },
                    new()
                    {
                        PostId = 1,
                        LabelId = "tech",
                    },
                    new()
                    {
                        PostId = 2,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 2,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 3,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 3,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 4,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 4,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 5,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 6,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 7,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 7,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 8,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 8,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 9,
                        LabelId = "development",
                    },
                    new()
                    {
                        PostId = 9,
                        LabelId = "csharp",
                    },
                    new()
                    {
                        PostId = 9,
                        LabelId = "programming",
                    },
                    new()
                    {
                        PostId = 10,
                        LabelId = "programming",
                    },
                });
            }
            #endregion LabelInKnowledgeBase
            
            await _context.SaveChangesAsync();
        }
    }
}