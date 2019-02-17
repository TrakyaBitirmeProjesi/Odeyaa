using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Test_Project.Data.Migrations
{
    public partial class ver7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SiparisUrunler_Siparis_SiparisIdId",
                table: "SiparisUrunler");

            migrationBuilder.DropIndex(
                name: "IX_SiparisUrunler_SiparisIdId",
                table: "SiparisUrunler");

            migrationBuilder.DropColumn(
                name: "SiparisIdId",
                table: "SiparisUrunler");

            migrationBuilder.AddColumn<int>(
                name: "SiparisId",
                table: "SiparisUrunler",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SiparisId",
                table: "SiparisUrunler");

            migrationBuilder.AddColumn<int>(
                name: "SiparisIdId",
                table: "SiparisUrunler",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SiparisUrunler_SiparisIdId",
                table: "SiparisUrunler",
                column: "SiparisIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_SiparisUrunler_Siparis_SiparisIdId",
                table: "SiparisUrunler",
                column: "SiparisIdId",
                principalTable: "Siparis",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
