﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Test_Project.Controllers
{
    public class SonuclarController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}