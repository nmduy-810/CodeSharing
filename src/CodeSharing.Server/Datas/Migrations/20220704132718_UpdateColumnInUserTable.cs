using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeSharing.Server.Datas.Migrations
{
    public partial class UpdateColumnInUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NumberOfKnowledgeBases",
                table: "AspNetUsers",
                newName: "NumberOfPosts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NumberOfPosts",
                table: "AspNetUsers",
                newName: "NumberOfKnowledgeBases");
        }
    }
}
