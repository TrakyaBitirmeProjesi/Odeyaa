using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Test_Project.Data.Migrations
{
    public partial class ver5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Carrefour_Link",
                table: "Siparis");

            migrationBuilder.DropColumn(
                name: "Migros_Link",
                table: "Siparis");

            migrationBuilder.AddColumn<DateTime>(
                name: "Tarih",
                table: "Siparis",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tarih",
                table: "Siparis");

            migrationBuilder.AddColumn<string>(
                name: "Carrefour_Link",
                table: "Siparis",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Migros_Link",
                table: "Siparis",
                nullable: true);
        }
    }
}
