using CodeSharing.Server.Datas.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Datas.Provider;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Create Index for Slug column of Category table
        builder.Entity<Category>(entity => entity.HasIndex(p => p.Slug));
        builder.Entity<Post>(entity => entity.HasIndex(p => p.Slug));
        
        // Set two primary key is LabelId, PostId in LabelInPost table
        builder.Entity<LabelInPost>().HasKey(c => new { c.LabelId, c.PostId });
        
        
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Comment> Comments { get; set; }
    public DbSet<Label> Labels { get; set; }
    public DbSet<LabelInPost> LabelInPosts { get; set; }
    public DbSet<Post> Posts { get; set; }
}