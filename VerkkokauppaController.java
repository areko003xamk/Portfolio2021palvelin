package ot10.verkkokauppa;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class VerkkokauppaController
{

    @GetMapping("/")
    public String index(Model model)
    {
        try {

            Verkkokauppa verkkokauppa = new Verkkokauppa();

            model.addAttribute("tuoteluettelo", verkkokauppa.haeKaikki());

            return "index";

        } catch (Exception e) {

            model.addAttribute("virhe", e.getMessage());

            return "virhe";

        }
    }

    

}