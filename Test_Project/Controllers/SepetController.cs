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
    public class SepetController : Controller
    {
        private UserManager<ApplicationUser> _usermanager;
        private ApplicationDbContext _ctx;

        public SepetController(ApplicationDbContext _ctx, UserManager<ApplicationUser> _usermanager)
        {
            this._usermanager = _usermanager;
            this._ctx = _ctx;
        }
        [Authorize]
        public JsonResult Urun_Ekle(string resim,string urun_adi,float fiyat,string url)
        {
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var sepet = new Istek();
            sepet.user = user;
            sepet.Urun_Adi = urun_adi;
            sepet.Urun_Fiyati =fiyat;
            sepet.Urun_Linki = url;
            sepet.Urun_Fotograf = resim;
            _ctx.Sepet.Add(sepet);
            _ctx.SaveChanges();
            return Json("true");
        }
        [Authorize]
        public JsonResult Urunler()
        {
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var sepet = _ctx.Sepet.Where(a => a.user.Id == user.Id).Select(s => new SepetViewModel() { Urun_Adi = s.Urun_Adi, Urun_Fiyati = s.Urun_Fiyati, Urun_Fotograf = s.Urun_Fotograf, Urun_Linki = s.Urun_Linki, Id = s.Id }).ToList();
            return Json(sepet);
        }
        //[Authorize]
        public IActionResult Index()
        {
            return View();
        }
        [Authorize]
        public JsonResult Urun_Sil(int Id)
        {
            var silme_sepet = new Istek { Id = Id };
            _ctx.Sepet.Attach(silme_sepet);
            _ctx.Sepet.Remove(silme_sepet);
            _ctx.SaveChanges();
            return Json("true");
        }
    }
}