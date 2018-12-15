using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Project.Models.AccountViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Display(Name = "Telefon Numarası")]
        public string Telefon_No { get; set; }

        [Display(Name = "Adres")]
        public string Adres { get; set; }

        [Display(Name = "Cinsiyet")]
        public string Cinsiyet { get; set; }

        [Display(Name = "DogumTarihi")]
        public DateTime Dogum_Tarihi { get; set; }

        [Display(Name = "Ogrenim Durumu")]
        public string Ogrenim_Durumu { get; set; }

        [Display(Name = "Meslek")]
        public string Meslek { get; set; }

        [Display(Name = "Medeni Durum")]
        public string Medeni_Durum { get; set; }

        [Display(Name = "Ad_Soyad")]
        public string Ad_Soyad { get; set; }

    }
}
