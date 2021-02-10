import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Etusivu: React.FC = () => {

  return (   
      
<Jumbotron fluid>
  <Container>
    <h1>Suomalaisia postimerkkejä 1860 - 2014</h1>
    <p>
      Kattava kokoelma kotimaisia postimerkkejä yli 150 vuoden ajalta.
    </p>

    <Card>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/postimerkki.jpg`} />
    </Card>

  </Container>
</Jumbotron>
  );
}

export default Etusivu;





