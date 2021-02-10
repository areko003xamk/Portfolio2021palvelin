import React from 'react';
import Alert from 'react-bootstrap/Alert';


interface Props {
            otsikko : string
          }

const Ylatunniste : React.FC<Props> = (props : Props) => {
    return (

        <Alert variant="success">

            <Alert.Heading>
                <h1>{props.otsikko}</h1>
            </Alert.Heading>

            <p>Laatua vuodesta 2020</p>
            

        </Alert>


        
    )
}

export default Ylatunniste;
