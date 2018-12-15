using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Test_Project.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Ad_Soyad { get; set; }
        public string Telefon_No { get; set; }
        public string Adres { get; set; }
        public string Cinsiyet { get; set; }
        public DateTime Dogum_Tarihi { get; set; }
        public string Ogrenim_Durumu { get; set; }
        public string Meslek { get; set; }
        public string Medeni_Durum { get; set; }
        public bool Yoneticilik { get; set; }
    }
}
