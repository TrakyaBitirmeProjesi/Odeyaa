using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Project.Models
{
    public class Siparis
    {
        public int Id { get; set; }
        public ApplicationUser user { get; set; }
        public string Carrefour_Link { get; set; }
        public string Migros_Link { get; set; }
        public float Toplam_Fiyat { get; set; }
    }
}
