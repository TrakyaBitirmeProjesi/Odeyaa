using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Project.Models
{
    public class ArananlarViewModel
    {
        public int Id { get; set; }
        public ApplicationUser user { get; set; }
        public string Kelime { get; set; }
        public DateTime Tarih { get; set; }
        public string user_id { get; set; }
    }
}
