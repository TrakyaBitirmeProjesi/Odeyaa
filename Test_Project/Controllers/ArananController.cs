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
    public class ArananController : Controller
    {
        private UserManager<ApplicationUser> _usermanager;
        private ApplicationDbContext _ctx;

        public ArananController(ApplicationDbContext _ctx, UserManager<ApplicationUser> _usermanager)
        {
            this._usermanager = _usermanager;
            this._ctx = _ctx;
        }
        [Authorize]
        public JsonResult AramaEkle(string aranan_kelime)
        {
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var Aranan = new Arananlar();
            Aranan.user = user;
            Aranan.Kelime = aranan_kelime;
            Aranan.Tarih = DateTime.Now;
            _ctx.Arananlar.Add(Aranan);
            _ctx.SaveChanges();
            return Json("true");
        }
        [Authorize]
        public JsonResult Urun_Sil(int Id)
        {
            var silme_Aranan = new Arananlar { Id = Id };  
            _ctx.Arananlar.Attach(silme_Aranan);
            //_ctx.Arananlar.Remove(silme_Aranan);  //ÜRÜN VERİ TABANINDAN SİLİNMEYECEK
            _ctx.SaveChanges();
            return Json("true");
        }
        [Authorize]
        public JsonResult Aranan_Urunleri_Goster()
        {
            var dneme = "";
            ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            var Aranan = _ctx.Arananlar.Where(a => a.user.Id == user.Id).Select(s => new ArananlarViewModel() { Kelime = s.Kelime, Tarih = s.Tarih ,Id =s.Id,user_id = s.user.Id}).ToList();
            return Json(Aranan);
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}