import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Etusivu from './components/Etusivu';
import Selaa from './components/Selaa';


interface Tiedot {
  postimerkit : any[],
  tiedotHaettu : boolean,
  virhe? : string
}

const App: React.FC = () => {

  const [tiedot, setTiedot] = useState<Tiedot>({
    postimerkit : [],
    tiedotHaettu : false,
    virhe : ""
 });

  useEffect(() => {

    async function haeTiedot() {  
        try {

          let res = await fetch("https://xamkbit.herokuapp.com/postimerkit");

          let postimerkit = await res.json();

         setTiedot({...tiedot,
                          postimerkit : postimerkit,
                          tiedotHaettu : true
                        });
        /*Saadaan tulostettua 20 ensimmäisen merkin tiedot konsoliin. Ainakin saadaan dataa sisään.
        Miten sen saisi oikeaan paikkaan on iso kysymys.*/  
        for(let i = 0; i <= 19; i++){
          console.log(postimerkit[i]);
        }

        } catch (error) {

          setTiedot({...tiedot,
            tiedotHaettu : true,
            virhe : "Ei yhteyttä palvelimeen"
          });

        }

    }

  haeTiedot();

  }, []);

  return (
 
    <Router>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">POSTIMERKKIKOKOELMA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Etusivu</Nav.Link>
          <Nav.Link as={Link} to="/selaa/">Selaa</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>

  <Container className="mt-2">       
        <Route exact path="/" component={Etusivu}></Route>     
        <Route path="/selaa/" component={Selaa}></Route>      
    </Container>

  </Router>

  );
}

export default App;
