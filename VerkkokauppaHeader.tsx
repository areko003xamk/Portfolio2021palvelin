import React from 'react';

interface Props {
            otsikko : string
          }

const VerkkokauppaHeader : React.FC<Props> = (props : Props) => {
    return (
        <div className="alert alert-info" role="alert">
        <h2>{props.otsikko}</h2>
        </div>
    )
}

export default VerkkokauppaHeader;
