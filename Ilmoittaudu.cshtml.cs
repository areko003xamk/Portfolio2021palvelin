using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ot6.Pages
{
    public class IlmoittauduModel : PageModel
    {

        public List<string> Sarjalista = new List<string>{
        "20 – 59 vuotiaat miehet",
    
        "60 – 69 vuotiaat miehet",
    
        "70 – 79 vuotiaat miehet",
    
        "yli 80 v. miehet",
    
        "20 – 59 vuotiaat naiset",
    
        "60 – 69 vuotiaat naiset",
    
        "70 – 79 vuotiaat naiset",
    
        "yli 80 v. naiset",
    
        "alle 19-vuotiaat pojat ",
    
        "alle 19-vuotiaat tytöt",

        "alle 17-vuotiaat pojat ",
    
        "alle 17-vuotiaat tytöt ",
    
        "alle 12-vuotiaat tytöt tai pojat"
    };


        public void OnGet()
        {
        }

        public void OnPost()
        {
            
        }
    }
}
