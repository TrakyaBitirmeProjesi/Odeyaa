using System;
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
    public class IstekController : Controller
    {
        private UserManager<ApplicationUser> _usermanager;
        private ApplicationDbContext _ctx;

        public IstekController(ApplicationDbContext _ctx, UserManager<ApplicationUser> _usermanager)
        {
            this._usermanager = _usermanager;
            this._ctx = _ctx;
        }
        [Authorize]
        public JsonResult Urun_Ekle(string resim, string urun_adi, float fiyat, string url)
        {
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var Istek = new Favoriler();
            Istek.user = user;
            Istek.Urun_Adi = urun_adi;
            Istek.Urun_Fiyati = fiyat;
            Istek.Urun_Linki = url;
            Istek.Urun_Fotograf = resim;
            _ctx.Favoriler.Add(Istek);
            _ctx.SaveChanges();
            return Json("true");
        }
        [Authorize]
        public JsonResult Urun_Sil(int Id)
        {
            var silme_Istek = new Favoriler { Id = Id };
            _ctx.Favoriler.Attach(silme_Istek);
            _ctx.Favoriler.Remove(silme_Istek);
            _ctx.SaveChanges();
            return Json("true");
        }

        [Authorize]
        public JsonResult fav_Urun_goster(string resim, string urun_adi, float fiyat, string url)
        {
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var Istek = _ctx.Favoriler.Where(a => a.user.Id == user.Id).Select(s => new FavorilerViewModel() { Urun_Adi = s.Urun_Adi, Urun_Fiyati = s.Urun_Fiyati, Urun_Fotograf = s.Urun_Fotograf, Urun_Linki = s.Urun_Linki, Id = s.Id }).ToList();
            return Json(Istek);
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}