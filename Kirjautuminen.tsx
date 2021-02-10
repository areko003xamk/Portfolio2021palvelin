import React from 'react';

interface State {
    kirjaus : string,
    tunnus : string,
    salasana : string,
    painike : string

}

export default class Kirjautuminen extends React.Component {

    state : State = {
        kirjaus : "Kirjautuminen",
        tunnus : "",
        salasana : "",
        painike : "Kirjaudu"
    }

    paivita = (event : any) => {

        this.setState({ tunnus :  event.target.value});
        this.setState({ salasana :  event.target.value });
      }
      
        kirjaudu = () => {
      
          if(this.state.tunnus == "testi" && this.state.salasana == "testi"){
      
            this.setState({
      
              kirjaus : "Olet kirjautunut sisään tunnuksella: testi.",
              painike : "Kirjaudu ulos"
      
            });
          }
        }

/* Tällä viritelmällä ajattelin yrittää uloskirjautumista, mutta eihän se voi toimia.
        kirjauduUlos = () => {
            if(this.state.painike == "Kirjaudu ulos"){
                this.setState({
                    kirjaus : "Kirjautuminen",
                    painike : "kirjaudu"
                }) 
            }
           }
*/

    render() {
      return (
        <div className="nav flex-column">
            <nav className="navbar navbar-light bg-light">
                <div className="card mt-2">
                    <div className="card-body">
                        <h5>{this.state.kirjaus}</h5>
                        <input className="form-control mt-2" type="text" onChange={this.paivita} name="tunnus" placeholder="Kirjoita tunnus..." />
                        <input className="form-control mt-2" type="text" onChange={this.paivita} name="salasana" placeholder="Kirjoita salasana..." />
                        <button className="btn btn-primary btn-block mt-2" onClick={() => { this.kirjaudu(); }}>{this.state.painike}</button>
                    </div>
                </div>
            </nav>
    </div>
      );
    }
  }

