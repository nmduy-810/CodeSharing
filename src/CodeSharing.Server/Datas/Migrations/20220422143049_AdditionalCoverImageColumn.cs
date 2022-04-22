using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeSharing.Server.Datas.Migrations
{
    public partial class AdditionalCoverImageColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CoverImage",
                table: "Posts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImage",
                table: "Posts");
        }
    }
}
