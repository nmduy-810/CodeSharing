using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeSharing.Server.Migrations
{
    public partial class InsertCoverImageTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CoverImageId",
                table: "Cds_Posts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Cds_CoverImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageUrl = table.Column<string>(type: "nvarchar(1000)", nullable: false),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cds_CoverImages", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cds_Posts_CoverImageId",
                table: "Cds_Posts",
                column: "CoverImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cds_Posts_Cds_CoverImages_CoverImageId",
                table: "Cds_Posts",
                column: "CoverImageId",
                principalTable: "Cds_CoverImages",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cds_Posts_Cds_CoverImages_CoverImageId",
                table: "Cds_Posts");

            migrationBuilder.DropTable(
                name: "Cds_CoverImages");

            migrationBuilder.DropIndex(
                name: "IX_Cds_Posts_CoverImageId",
                table: "Cds_Posts");

            migrationBuilder.DropColumn(
                name: "CoverImageId",
                table: "Cds_Posts");
        }
    }
}
