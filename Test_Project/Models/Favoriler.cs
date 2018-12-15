using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Project.Models
{
    public class Favoriler
    {
        public int Id { get; set; }
        public ApplicationUser user { get; set; }
        public string Urun_Adi { get; set; }
        public float Urun_Fiyati { get; set; }
        public string Urun_Linki { get; set; }
        public string Urun_Fotograf { get; set; }
    }
}
