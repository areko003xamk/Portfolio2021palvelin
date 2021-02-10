import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Etusivu: React.FC = () => {
 
  return (   
      
<Jumbotron fluid>
  <Container>
    <h1>Kymmenottelukisa, jossa kunto punnitaan!</h1>

    <Card>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/10_ottelu.jpg`} />
    </Card>

  </Container>
</Jumbotron>
  );
}

export default Etusivu;





