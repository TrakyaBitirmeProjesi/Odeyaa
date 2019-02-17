using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Test_Project.Data.Migrations
{
    public partial class ver6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SiparisUrunler",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SiparisIdId = table.Column<int>(nullable: true),
                    Urun_Adi = table.Column<string>(nullable: true),
                    Urun_Fiyati = table.Column<float>(nullable: false),
                    Urun_Fotograf = table.Column<string>(nullable: true),
                    Urun_Linki = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SiparisUrunler", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SiparisUrunler_Siparis_SiparisIdId",
                        column: x => x.SiparisIdId,
                        principalTable: "Siparis",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SiparisUrunler_SiparisIdId",
                table: "SiparisUrunler",
                column: "SiparisIdId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SiparisUrunler");
        }
    }
}
