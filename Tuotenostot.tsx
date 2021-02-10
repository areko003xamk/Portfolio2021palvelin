import React from 'react';

interface Props {
            tuotteita : string,
          }

const Tuotenostot : React.FC<Props> = (props : Props) => {
    return (
<div className="card mt-1">
                <div className="card-header">
                <h4>{props.tuotteita}</h4>
            </div>
            <div className="card-body">
  <table className="card-text">

  <table className="table">
  <tbody>
    <tr>
      <td><div className="card"><img src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita1.jpg`} />
      <div className="card-body"><h6 className="card-title">Musta t-paita</h6><p className="card-text">Hinta: 65,00 €</p>
      </div></div></td>
      <td><div className="card"><img src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita2.jpg`} />
      <div className="card-body"><h6 className="card-title">Harmaa t-paita</h6><p className="card-text">Hinta: 73,00 €</p>
      </div></div></td>
      <td><div className="card"><img src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita3.jpg`} />
      <div className="card-body"><h6 className="card-title">Jeans t-paita</h6><p className="card-text">Hinta: 99,00 €</p>
      </div></div></td>
    </tr>
    <tr>
      <td><div className="card"><img src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita4.jpg`} />
      <div className="card-body"><h6 className="card-title">Retee t-paita</h6><p className="card-text">Hinta: 299,00 €</p>
      </div></div></td>
      <td><div className="card"><img src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita5.jpg`} />
      <div className="card-body"><h6 className="card-title">Female t-paita</h6><p className="card-text">Hinta: 199,00 €</p>
      </div></div></td>
      <td><div className="card"><img src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita6.jpg`} />
      <div className="card-body"><h6 className="card-title">Juntti t-paita</h6><p className="card-text">Hinta: 19,00 €</p>
      </div></div></td>
    </tr>
  </tbody>
</table>
  </table>
  </div>
  </div>
    )
}

export default Tuotenostot;