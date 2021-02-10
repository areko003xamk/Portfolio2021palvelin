import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Merkkiluettelo from '../models/Merkkiluettelo';

/*Tiedon siirtäminen tuottaa tässäkin harmaita hiuksia. Monenlaisia viritelmiä olen
yrittänyt aina kikkakolmosiin ja -viitosiin asti. Sain kuitenkin jotain dataa, että
sivuilla on jotain. Tässä olisi asianmukainen pohja vaadituille tiedoille.*/
const Selaa = () => {

    return (
        <ListGroup>
            {Merkkiluettelo.map((postimerkki, idx) => {
                return (
                        <Card>
                            <Card.Img variant="top" src={postimerkki.kuvan_url} />
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Merkin nimi: {postimerkki.merkin_nimi}</ListGroup.Item> 
                                    <ListGroup.Item>Ilmestymispäivämäärä: {postimerkki.ilmestymispaiva}</ListGroup.Item>
                                    <ListGroup.Item>Nimellisarvo: {postimerkki.nimellisarvo} ({postimerkki.valuutta})</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                       )
            })} 
        </ListGroup>   
    )
}

export default Selaa




