import React from 'react';

interface Props {
            teksti : string
          }

const Alatunniste : React.FC<Props> = (props : Props) => {
    return (
 

<footer className="footer mt-auto py-3">

  <div className="alatunniste">
  <div className="row justify-content-center">
  <span className="text-muted"><p>PL 123, 23456 Kaupunki</p></span>
  </div>
  <div className="row justify-content-center">
  <span className="text-muted"><p>{props.teksti} &copy; 2020</p></span>
  </div>
  </div>

</footer>

    )
}

export default Alatunniste;
