using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Project.Models
{
    public class SiparisViewModel
    {
        public int Id { get; set; }
        public ApplicationUser user { get; set; }
        public float Toplam_Fiyat { get; set; }
        public DateTime Tarih { get; set; }
        public string UserId { get; set; }
        public string Kategori { get; set; }
    }
}
