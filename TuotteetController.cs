using Microsoft.AspNetCore.Mvc;
using ot8.Models;
using System;


namespace ot8.Controllers
{
    public class TuotteetController : Controller
    {
        public IActionResult Index()
        {

            try {

                Tuotteet tuotteet = new Tuotteet();

                return View("Index", tuotteet.haeKaikki());


            } catch (Exception e) {

                return View("Virhe", e.Message);
                
            }
            
        }

    }
}
