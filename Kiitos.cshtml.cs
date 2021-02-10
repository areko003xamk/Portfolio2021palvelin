using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ot6.Pages
{
    public class KiitosModel : PageModel
    {

        public string Etunimi { get; set; }
        public string Sukunimi { get; set; }
        public string Paikkakunta { get; set; }
        public string Puhelinnumero { get; set; }
        public string Sahkoposti { get; set; }

        public void OnGet()
        {
            this.Etunimi = Request.Query["etunimi"];
            this.Sukunimi = Request.Query["sukunimi"];
            this.Paikkakunta = Request.Query["paikkakunta"];
            this.Puhelinnumero = Request.Query["puhelinnumero"];
            this.Sahkoposti = Request.Query["sahkoposti"];
        }

        public void OnPost()
        {
        }
    }
}
