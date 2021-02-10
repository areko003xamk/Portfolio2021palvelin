import React from 'react';
import './App.css';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Verkkokauppa from './components/Verkkokauppa';
import VerkkokauppaMain from './components/VerkkokauppaMain'; 
import VerkkokauppaRightNav from './components/VerkkokauppaRightNav';
import Tuotenostot from './components/Tuotenostot';
import Kirjautuminen from './components/Kirjautuminen';
import Pikaostoskori from './components/Pikaostoskori';

/*
Yhden pisteen osan sain jokseenkin tehtyä. Ainoastaan uloskirjautuminen tapahtumineen
on liian vaikea toteuttaa (yritetty kuitenkin on). Lisäpisteosiotakin yrittelin,
mutta huononpuoleisella menestyksellä.
*/

interface Props {};

export default class App extends React.Component<Props> {

  constructor(props : Props) {
    super(props);
}

  render() {
    return (
        <Verkkokauppa>
        <VerkkokauppaHeader otsikko="T-PAITAKAUPPA"/>
        <VerkkokauppaMain>
        <Tuotenostot tuotteita="6 tuotetta saatavilla"/>
        </VerkkokauppaMain>
        <VerkkokauppaRightNav>
        <Kirjautuminen/>
        <Pikaostoskori pikaostos="Pikaostoskori"/>
        </VerkkokauppaRightNav>
        <VerkkokauppaFooter teksti="Copyright"/>
        </Verkkokauppa>
    );
  }
}
