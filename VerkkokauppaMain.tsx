import React from 'react';

interface Props {
            children : any
          }

const VerkkokauppaMain : React.FC<Props> = (props : Props) => {
    return (

        <div className="asemointi">
        <h1>{props.children}</h1>
        </div>


    )
}

export default VerkkokauppaMain;
