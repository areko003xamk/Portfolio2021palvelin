import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import appContext from '../context/appContext';

const Osallistujat: React.FC = () => {
    
       const appData = React.useContext(appContext);
            
        return (
            
            <Container>
                <h3>Kilpailuun osallistujat</h3>
                
            <ListGroup horizontal>
            {appData.osallistujat.map((osallistuja) => {
                return(
                    <ListGroup.Item>
                        {osallistuja.sukunimi}, {osallistuja.etunimi}, {osallistuja.valtio}
                    </ListGroup.Item>
                )
            })}
            </ListGroup>
            
            <Button className="btn btn-primary mt-4" as={Link} to="/lisaa">
                Lisää uusi osallistuja
            </Button>

            </Container>
            
        )        
    }
    
    export default Osallistujat