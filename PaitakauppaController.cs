using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ot9.Models;
using System;

namespace ot9.Controllers {

    [ApiController]
    [Route("api/[controller]")]
 
    public class TuotteetController : ControllerBase
    {
        [HttpGet]
        public List<Tuoterivi> Get() {

            Tuotteet tuotteet = new Tuotteet();

            List<Tuoterivi> apulista = tuotteet.haeKaikki(); 

            return apulista;

        }

        [HttpGet("{id}")]

        public IActionResult Get(int id) {

            try {

                Tuotteet tuote = new Tuotteet();

                tuote.Nayta(id);

                return Ok(tuote);

            } catch (Exception e) {

                return StatusCode(500, $"VIRHE: {e.Message}");                

            }

        }

    }

}