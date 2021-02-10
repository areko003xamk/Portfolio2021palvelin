import React from 'react';

interface Props {
            pikaostos : string
          }

const Pikaostoskori : React.FC<Props> = (props : Props) => {
    return (
        
<div className="nav flex-column">
            <nav className="navbar navbar-light bg-light">
                <div className="card mt-2">
                <div className="card-header">
                <h3>{props.pikaostos}</h3>
            </div>
            <div className="card-body">
  <h5 className="card-text">Ostoskorissa ei ole tuotteita.</h5>
  </div>
  </div>

</nav>
    </div>
    )
}


export default Pikaostoskori;