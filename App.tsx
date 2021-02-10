/*Tämä tehtävä ei ota rehkimisestä huolimatta onnistuakseen. Aloitusnäkymän
kuvan teksti osuu erinomaisesti myös omiin tuntemuksiini. Räpellyksessäni on kyllä
toimivia osia. 1500 metriä on 10-ottelijoiden painajainen. Minulle painajaista on
saada tiedot siirrettyä Lisaa-komponentista Osallistujat-komponenttiin. Itse asiassa
koko homma alkaa olla painajaista.*/
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Etusivu from './components/Etusivu';
import Osallistujat from './components/Osallistujat';
import Lisaa from './components/Lisaa';

export default class App extends React.Component {

  render() { return (

    <Router>
    <Container>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>10-OTTELUKISA</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Etusivu</Nav.Link>
        <Nav.Link as={Link} to="/osallistujat/">Osallistujat</Nav.Link>
        <Nav.Link as={Link} to="/lisaa/">Lisää osallistuja</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>


<Route exact path="/" component={Etusivu}></Route>
<Route path="/osallistujat/" component={Osallistujat}></Route>
<Route path="/lisaa/" component={Lisaa}></Route>
 

</Container>

  </Router>

  );
}
}
