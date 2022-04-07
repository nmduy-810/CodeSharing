using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeSharing.Server.Datas.Migrations
{
    public partial class DeleteSocialUrlTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SocialUrls");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SocialUrls",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FacebookUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    InstagramUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    MediumUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    PinterestUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    TwitterUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    YoutubeUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialUrls", x => x.Id);
                });
        }
    }
}
