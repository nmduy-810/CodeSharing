using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeSharing.Server.Datas.Migrations
{
    public partial class AdditionalOwwnerUserIdInPostTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OwnerUserId",
                table: "Posts",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OwnerUserId",
                table: "Posts");
        }
    }
}
