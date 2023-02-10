using CodeSharing.DTL.EFCoreEntities;
using CodeSharing.DTL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Infrastructure.EFCore.Provider;

public class ApplicationDbContext : IdentityDbContext<CdsUser>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<CdsActivityLog> ActivityLogs { set; get; } = default!;
    
    public DbSet<CdsAttachment> Attachments { get; set; } = default!;
    public DbSet<CdsCategory> Categories { set; get; } = default!;
    public DbSet<CdsCommand> Commands { set; get; } = default!;
    public DbSet<CdsCommandInFunction> CommandInFunctions { set; get; } = default!;
    public DbSet<CdsComment> Comments { set; get; } = default!;
    public DbSet<CdsFunction> Functions { set; get; } = default!;
    public DbSet<CdsPost> Posts { set; get; } = default!;
    public DbSet<CdsLabel> Labels { set; get; } = default!;
    public DbSet<CdsLabelInPost> LabelInPosts { set; get; } = default!;
    public DbSet<CdsPermission> Permissions { set; get; } = default!;
    public DbSet<CdsReport> Reports { set; get; } = default!;
    public DbSet<CdsVote> Votes { set; get; } = default!;
    public DbSet<CdsContact> Contacts { get; set; } = default!;
    public DbSet<CdsAbout> Abouts { get; set; } = default!;
    public DbSet<CdsSupport> Supports { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Create Index for Slug column of Category table
        builder.Entity<CdsCategory>(entity => entity.HasIndex(p => p.Slug));

        builder.Entity<CdsPost>(entity => entity.HasIndex(p => p.Slug));

        // Set two primary key is LabelId, PostId in LabelInPost table
        builder.Entity<CdsLabelInPost>().HasKey(c => new { c.LabelId, c.PostId });

        // Set max length is 50 for Id of IdentityRole table and dont enter unicode value
        builder.Entity<IdentityRole>().Property(x => x.Id).HasMaxLength(50).IsUnicode(false);

        // Set max length is for Id of User table and dont enter unicode value
        builder.Entity<CdsUser>().Property(x => x.Id).HasMaxLength(50).IsUnicode(false);

        builder.Entity<CdsPermission>().HasKey(c => new { c.RoleId, c.FunctionId, c.CommandId });

        builder.Entity<CdsVote>().HasKey(c => new { c.PostId, c.UserId });

        builder.Entity<CdsCommandInFunction>().HasKey(c => new { c.CommandId, c.FunctionId });

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