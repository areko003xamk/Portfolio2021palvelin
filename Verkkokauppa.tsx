import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
            children : any
          }

const Verkkokauppa : React.FC<Props> = (props : Props) => {
    return (
        <Container>{props.children}</Container>
    )
}


export default Verkkokauppa;
