using CodeSharing.Server.Datas.Entities;
using Microsoft.AspNetCore.Identity;
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
        
        // Set max length is 50 for Id of IdentityRole table and dont enter unicode value
        builder.Entity<IdentityRole>().Property(x => x.Id).HasMaxLength(50).IsUnicode(false);
        
        // Set max length is for Id of User table and dont enter unicode value
        builder.Entity<User>().Property(x => x.Id).HasMaxLength(50).IsUnicode(false);
        
        builder.Entity<Permission>().HasKey(c => new { c.RoleId, c.FunctionId, c.CommandId });
        
        builder.Entity<Vote>().HasKey(c => new { c.PostId, c.UserId });
        
        builder.Entity<CommandInFunction>().HasKey(c => new { c.CommandId, c.FunctionId });
        
        //Set sequence for Id of Post table.
        builder.HasSequence("PostSequence");
    }

    public DbSet<ActivityLog> ActivityLogs { set; get; }
    public DbSet<Attachment> Attachments { get; set; }
    public DbSet<Category> Categories { set; get; }
    public DbSet<Command> Commands { set; get; }
    public DbSet<CommandInFunction> CommandInFunctions { set; get; }
    public DbSet<Comment> Comments { set; get; }
    public DbSet<Function> Functions { set; get; }
    public DbSet<Post> Posts { set; get; }
    public DbSet<Label> Labels { set; get; }
    public DbSet<LabelInPost> LabelInPosts { set; get; }
    public DbSet<Permission> Permissions { set; get; }
    public DbSet<Report> Reports { set; get; }
    public DbSet<Vote> Votes { set; get; }
}