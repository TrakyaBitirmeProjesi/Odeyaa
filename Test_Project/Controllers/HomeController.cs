using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Test_Project.Data;
using Test_Project.Models;

namespace Test_Project.Controllers
{
    public class HomeController : Controller
    {
        private UserManager<ApplicationUser> _usermanager;
        private ApplicationDbContext _ctx;

        public HomeController(ApplicationDbContext _ctx, UserManager<ApplicationUser> _usermanager)
        {
            this._usermanager = _usermanager;
            this._ctx = _ctx;
        }

        public IActionResult Index()
        {   
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Islogin()
        {
            try
            {
                ApplicationUser user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
                return Json(true);
            }
            catch
            {
                return Json(false);
            }
        }
        public JsonResult Siparis_GetList()
        {
            var numbers = new List<string>() { "0","0","0","0","0","0","0","0","0","0","0","0","0"};
            ApplicationUser user = null;
            try {
                user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
            }
            catch
            {
                return Json(numbers);
            }


            var siparisler = _ctx.Siparis.Where(a=>a.user.Id == user.Id.ToString()).Select(s => new SiparisViewModel() {UserId = s.user.Id,Kategori=s.Kategori }).ToList();
            foreach (SiparisViewModel value in siparisler) {
                var deneme = value.Kategori.ToString();
                string kategori_Index = deneme.Substring(deneme.Length -2);
                if (kategori_Index == "i1")
                {
                    numbers[0] = "1";
                }
                else if (kategori_Index == "i2")
                {
                    numbers[1] = "1";
                }
                else if (kategori_Index == "i3")
                {
                    numbers[2] = "1";
                }
                else if (kategori_Index == "i4")
                {
                    numbers[3] = "1";
                }
                else if (kategori_Index == "i5")
                {
                    numbers[4] = "1";
                }
                else if (kategori_Index == "i6")
                {
                    numbers[5] = "1";
                }
                else if (kategori_Index == "i7")
                {
                    numbers[6] = "1";
                }
                else if (kategori_Index == "i8")
                {
                    numbers[7] = "1";
                }
                else if (kategori_Index == "i9")
                {
                    numbers[8] = "1";
                }
                else if (kategori_Index == "10")
                {
                    numbers[9] = "1";
                }
                else if (kategori_Index == "11")
                {
                    numbers[10] = "1";
                }
                else if (kategori_Index == "12")
                {
                    numbers[11] = "1";
                }
                else if (kategori_Index == "13")
                {
                    numbers[12] = "1";
                }
            }
            return Json(numbers);
        }
        public JsonResult Siparis_GetListId(string userId)
        {
            var numbers = new List<string>() { "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" };

            var siparisler = _ctx.Siparis.Where(a => a.user.Id == userId.ToString()).Select(s => new SiparisViewModel() { UserId = s.user.Id, Kategori = s.Kategori }).ToList();
            foreach (SiparisViewModel value in siparisler)
            {
                var deneme = value.Kategori.ToString();
                string kategori_Index = deneme.Substring(deneme.Length - 2);
                if (kategori_Index == "i1")
                {
                    numbers[0] = "1";
                }
                else if (kategori_Index == "i2")
                {
                    numbers[1] = "1";
                }
                else if (kategori_Index == "i3")
                {
                    numbers[2] = "1";
                }
                else if (kategori_Index == "i4")
                {
                    numbers[3] = "1";
                }
                else if (kategori_Index == "i5")
                {
                    numbers[4] = "1";
                }
                else if (kategori_Index == "i6")
                {
                    numbers[5] = "1";
                }
                else if (kategori_Index == "i7")
                {
                    numbers[6] = "1";
                }
                else if (kategori_Index == "i8")
                {
                    numbers[7] = "1";
                }
                else if (kategori_Index == "i9")
                {
                    numbers[8] = "1";
                }
                else if (kategori_Index == "10")
                {
                    numbers[9] = "1";
                }
                else if (kategori_Index == "11")
                {
                    numbers[10] = "1";
                }
                else if (kategori_Index == "12")
                {
                    numbers[11] = "1";
                }
                else if (kategori_Index == "13")
                {
                    numbers[12] = "1";
                }
            }
            return Json(numbers);
        }

        public List<string> Siparis_GetListId2(string userId)
        {
            var numbers = new List<string>() { "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" };

            var siparisler = _ctx.Siparis.Where(a => a.user.Id == userId.ToString()).Select(s => new SiparisViewModel() { UserId = s.user.Id, Kategori = s.Kategori }).ToList();
            foreach (SiparisViewModel value in siparisler)
            {
                var deneme = value.Kategori.ToString();
                string kategori_Index = deneme.Substring(deneme.Length - 2);
                if (kategori_Index == "i1")
                {
                    numbers[0] = "1";
                }
                else if (kategori_Index == "i2")
                {
                    numbers[1] = "1";
                }
                else if (kategori_Index == "i3")
                {
                    numbers[2] = "1";
                }
                else if (kategori_Index == "i4")
                {
                    numbers[3] = "1";
                }
                else if (kategori_Index == "i5")
                {
                    numbers[4] = "1";
                }
                else if (kategori_Index == "i6")
                {
                    numbers[5] = "1";
                }
                else if (kategori_Index == "i7")
                {
                    numbers[6] = "1";
                }
                else if (kategori_Index == "i8")
                {
                    numbers[7] = "1";
                }
                else if (kategori_Index == "i9")
                {
                    numbers[8] = "1";
                }
                else if (kategori_Index == "10")
                {
                    numbers[9] = "1";
                }
                else if (kategori_Index == "11")
                {
                    numbers[10] = "1";
                }
                else if (kategori_Index == "12")
                {
                    numbers[11] = "1";
                }
                else if (kategori_Index == "13")
                {
                    numbers[12] = "1";
                }
            }
            return numbers;
        }
        public JsonResult liste_Xor(string uId)
        {
            var firstUserList = new List<string>() { "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" };
            ApplicationUser user = null;
            try
            {
                user = _usermanager.FindByNameAsync(HttpContext.User.Identity.Name).Result;
                firstUserList = Siparis_GetListId2(user.Id);
            }
            catch
            {
                return Json("0");
            }

            var secondUserList = Siparis_GetListId2(uId);
            List<int> xorListesi = new List<int>();
            for (int i = 0; i<13; i++)
            {
                var xorSonuc = Convert.ToInt32(firstUserList[i]) ^ Convert.ToInt32(secondUserList[i]);
                xorListesi.Add(xorSonuc);
            }
            return Json(xorListesi);
        }
    }
}
