import React from 'react';

interface Props {
            children : any
          }

const VerkkokauppaRightNav : React.FC<Props> = (props : Props) => {
    return (
        <div className="asemointi2">
        <h1>{props.children}</h1>
        </div>
    )
}

export default VerkkokauppaRightNav;
