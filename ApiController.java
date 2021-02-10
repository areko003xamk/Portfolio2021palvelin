
package ot10.verkkokauppa;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class ApiController
{
    @GetMapping("/tuoteluettelo")
    public ResponseEntity<Object> Get() {

        try {

            Verkkokauppa verkkokauppa = new Verkkokauppa();

            return new ResponseEntity<>(verkkokauppa.haeKaikki(), HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}

