import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import appContext, {AppContext as State } from '../context/appContext';
import {Link} from 'react-router-dom';

interface Props {};

export default class Lisaa extends React.Component<Props, State> {

    constructor(props : Props) {
        super(props);

    this.state = {
        sukunimi : "",
        etunimi : "",
        valtio : "",
        osallistujat : []
    }
}

    /* Tiedot piti lukea erillisesti, jotta edes se onnistui. Olisi ollut parempi
    käyttää yhtä syöttökenttää, johon tiedot olisi syötetty pötköön. Kukin tietopötkö
    olisi ollut oma alkionsa arrayssa, jolloin olisi voinut käyttää resurssit osallistujaluettelon
    tekemiseen näistä alkioista (tietopötköistä). Tiedon lukeminen kuitenkin toimii.*/
        paivita = (event : any) => {
          this.setState({ sukunimi :  event.target.value});
        }

        paivita2 = (event : any) => {
          this.setState({ etunimi :  event.target.value});
        }

        paivita3 = (event : any) => {
          this.setState({ valtio :  event.target.value});
        }

        /*Tämä lukee tiedot osallistujat-arrayhin. Sukunimi, etunimi ja valtio ovat
        arrayn sisällä, kuten rivillä 91 oleva testaustulostus osoittaa.*/
        lisaaOttelija = () => {
          this.setState({
          osallistujat : [this.state.sukunimi, this.state.etunimi, this.state.valtio]
        }) 
      }


      handleFormSubmit = () => {
        const { sukunimi } = this.state;
        const { etunimi } = this.state;
        const { valtio } = this.state;
        localStorage.setItem(sukunimi, sukunimi);
        localStorage.setItem(etunimi, etunimi);
        localStorage.setItem(valtio, valtio);
      };

      componentDidMount() {
        this.setState({ sukunimi : this.state.sukunimi,
                        etunimi : this.state.etunimi,
                        valtio : this.state.valtio
                        });
      }
      
    render() {
    return (

    <appContext.Provider value={this.state}>

        <Container>

        <Form>
            <Form.Group>
                <Form.Label>Sukunimi:</Form.Label>
                <Form.Control type="text" value={this.state.sukunimi} onChange={this.paivita} name="sukunimi" placeholder="Kirjoita sukunimi..." />
             </Form.Group>
            <Form.Group>
                <Form.Label>Etunimi:</Form.Label>
                <Form.Control type="text" value={this.state.etunimi} onChange={this.paivita2} name="etunimi" placeholder="Kirjoita etunimi..." />
             </Form.Group>
            <Form.Group>
                <Form.Label>Valtio:</Form.Label>
                <Form.Control type="text" value={this.state.valtio} onChange={this.paivita3} name="valtio" placeholder="Kirjoita valtio..." />
             </Form.Group>
             <Button onClick={() => { this.lisaaOttelija(); }}>
                Lisää
            </Button>
            <Button as={Link} to="/osallistujat">
                Peruuta
            </Button>
        </Form>
        <h1>{this.state.osallistujat}</h1>

        </Container>

    </appContext.Provider>

    )
}
}

