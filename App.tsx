import React from 'react';
import './App.css';

interface State {
  nayta? : boolean,
  maksu? : any,
  summa? : any//Tipin määrä. Huono nimi, mutta saa kelvata.
}

export default class App extends React.Component {
  state : State = {
    nayta : false,
    maksu : 0
    }

  paivita = (event : any) : void => {
    this.setState({
                    [event.target.name] : event.target.value,
                    nayta : false
                    });      
}

pihiTippi = () : void => {
  let kerroin : any = 0.1;
  let luku : any = this.state.maksu * kerroin;
  this.setState({
                  nayta : true,
                  summa : luku
                });
}

normiTippi = () : void => {
  let kerroin : any = 0.15;
  let luku : any = this.state.maksu * kerroin;
  this.setState({
                  nayta : true,
                  summa : luku
                });
}

reiluTippi = () : void => {
  let kerroin : any = 0.2;
  let luku : any = this.state.maksu * kerroin;
  this.setState({
                  nayta : true,
                  summa : luku
                });
}

  render() {
    let luku : any = this.state.maksu;//Nämä kolme riviä suorittavat tehtävänannon 1. osan laskun. Tulostus rivillä 94. Tässä sain myös valuuttamuodon näkymään.
    let kerroin : any = 0.15;
    let tippisumma = luku * kerroin;

    let virheviesti : JSX.Element = <div/>;

    if (luku == 0) {
      virheviesti = <div className="alert alert-danger mt-4">Merkki on kelpaamaton, syötä numero!</div>;
    }//En onnistunut saamaan ei-numeeristen arvojen vertailua toimimaan, mutta kyllä nollallakin päästään pitkälle tällä kertaa. Virheviestin tulostus rivillä 96.

    let tulostus : JSX.Element = <div/>;

    if (this.state.nayta == true){

      if (this.state.summa < 1){
        tulostus = <div className="alert alert-success mt-4">Tippi: 1,00 €</div>;
      }

      if (this.state.summa > 20){
        tulostus = <div className="alert alert-success mt-4">Tippi: 20,00 €</div>;
      }

      //En saanut mitenkään desimaali- tai valuuttanäkymää toimimaan, joten tulostus on kökkömäinen. tulostus rivillä 98.
      if (this.state.summa >= 1 && this.state.summa <= 20){
        tulostus = <div className="alert alert-success mt-4">Tippi: { this.state.summa } €</div>;
      }

    }

    return (
      <div className="container">
          <h1>
            TIPPILASKURI
          </h1>
  
          <input className="form-control mt-4" type="number" name="maksu" onChange={this.paivita}/>
  
          <button className="btn btn-primary mt-4" onClick={() => { this.pihiTippi(); }}>Pihi</button>

          <button className="btn btn-primary mt-4" onClick={() => { this.normiTippi(); }}>Normaali</button>

          <button className="btn btn-primary mt-4" onClick={() => { this.reiluTippi(); }}>Reilu</button>

        <div className="alert alert-success mt-4">Tippi: { tippisumma.toLocaleString('fi-FI', {style:'currency', currency:'EUR'}) }</div>

      { virheviesti }

      { tulostus }

      </div>
    );
  }

}

/*
Loppukommentti: Yhden pisteen osan olen jättänyt näkyviin. Se toimii, mutta virheilmoitus
ei välttämättä ole asianmukaisin. Tyhjä syöttöalue tulkitaan nollaksi, mutta kun syöttää
luvun, se toimii, kunhan luku on numero. Virheilmoitus tulee kaikesta muusta, kuin numeerisesta
arvosta.Toisen pisteen osa toimii mielestäni moitteetta, lukuun ottamatta kehnoa ulkoasua.
Desimaali- ja valuuttamerkinnät näyttävät edellyttävän lisäosan asentamista tutkimani aineiston
mukaan. Mikään yrittämäni viritelmä ei toiminut, vaikka käytin aikaa sen selvittämiseen. Jopa
1:n ja 20:n raja-arvot toimivat. Minusta tämä on kahden pisteen suoritus. Tosin rimaa hipoen ja
taitaapa rima jäädä vipottamaankin, mutta ei putoa.
*/

