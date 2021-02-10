import React from 'react';

interface Props {
            children : any
          }

const Tuotteet : React.FC<Props> = (props : Props) => {
    return (

        <h1>{props.children}</h1>


    )
}

export default Tuotteet;
