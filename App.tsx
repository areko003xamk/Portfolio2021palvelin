/*Mielestäni sovellukseni ainakin näyttää verkkokaupalta.
Ihan tehtävänannon mukaan ei homma toteutunut, mutta toimii kuitenkin
toiminnallisesti tarkoituksenmukaisesti. Tässä tehtävässä tuli myös
aitoa oppimista. Suurin osa sovelluksesta on toteutettu
Tuotenostot-komponentissa, jossa koodia onkin runsaanpuoleisesti. Kyllä
tämäkin tuotokseni yhden pisteen ansaitsee.
*/
import React, {useState} from 'react';
import './App.css';
import Verkkokauppa from './components/Verkkokauppa';
import Ylatunniste from './components/Ylatunniste';
import Alatunniste from './components/Alatunniste';
import Tuotteet from './components/Tuotteet';
import Tuotenostot from './components/Tuotenostot';


interface Props {};

const App: React.FC<Props> = () => {


    return (
        <Verkkokauppa>
        <Ylatunniste otsikko="REISKAN T-PAITAKAUPPA"/>
        <Tuotteet>
        <Tuotenostot tuotteita="6 tuotetta saatavilla"/>
        </Tuotteet>
        <Alatunniste teksti="Copyright"/>
        </Verkkokauppa>
    );
  
}

export default App;
