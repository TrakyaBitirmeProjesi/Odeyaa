﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Test_Project.Data;
using Test_Project.Models;

namespace Test_Project.Controllers
{
    public class SiparislerController : Controller
    {
        private UserManager<ApplicationUser> _usermanager;
        private ApplicationDbContext _ctx;

        public SiparislerController(ApplicationDbContext _ctx, UserManager<ApplicationUser> _usermanager)
        {
            this._usermanager = _usermanager;
            this._ctx = _ctx;
        }

        public IActionResult Index()
        {
            return View();
        }
        [Authorize]
        public JsonResult allsiparisler()
        {
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var siparis = _ctx.Siparis.Where(a => a.user.Id == user.Id).Select(s => new SiparisViewModel() {Id = s.Id,Tarih = s.Tarih,Toplam_Fiyat = s.Toplam_Fiyat}).ToList();
            return Json(siparis);
        }
        [Authorize]
        public IActionResult Detay()
        {
            return View();
        }
        public JsonResult detay_siparis(int id)
        {
            var siparis = _ctx.SiparisUrunler.Where(a => a.SiparisId == id).Select(s => new SiparisUrunlerViewModel() { Urun_Adi = s.Urun_Adi, Urun_Fiyati = s.Urun_Fiyati, Urun_Fotograf = s.Urun_Fotograf, Urun_Linki = s.Urun_Linki, Id = s.Id }).ToList();
            return Json(siparis);
        }
    }
}