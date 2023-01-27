using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Datas.Provider;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<ActivityLog> ActivityLogs { set; get; } = default!;
    
    public DbSet<Attachment> Attachments { get; set; } = default!;
    public DbSet<Category> Categories { set; get; } = default!;
    public DbSet<Command> Commands { set; get; } = default!;
    public DbSet<CommandInFunction> CommandInFunctions { set; get; } = default!;
    public DbSet<Comment> Comments { set; get; } = default!;
    public DbSet<Function> Functions { set; get; } = default!;
    public DbSet<Post> Posts { set; get; } = default!;
    public DbSet<Label> Labels { set; get; } = default!;
    public DbSet<LabelInPost> LabelInPosts { set; get; } = default!;
    public DbSet<Permission> Permissions { set; get; } = default!;
    public DbSet<Report> Reports { set; get; } = default!;
    public DbSet<Vote> Votes { set; get; } = default!;
    public DbSet<Contact> Contacts { get; set; } = default!;
    public DbSet<About> Abouts { get; set; } = default!;
    public DbSet<Support> Supports { get; set; } = default!;

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

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var modified = ChangeTracker.Entries()
            .Where(e => e.State is EntityState.Modified or EntityState.Added);
        foreach (var item in modified)
        {
            if (item.Entity is not IDateTracking changedOrAddedItem)
                continue;

            if (item.State == EntityState.Added)
                changedOrAddedItem.CreateDate = DateTime.Now;
            else
                changedOrAddedItem.LastModifiedDate = DateTime.Now;
        }

        return base.SaveChangesAsync(cancellationToken);
    }
}