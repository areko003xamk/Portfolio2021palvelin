import React from 'react';

interface Props {
            children : any
          }

const Verkkokauppa : React.FC<Props> = (props : Props) => {
    return (
        <div className="container">{props.children}</div>
    )
}

export default Verkkokauppa;
