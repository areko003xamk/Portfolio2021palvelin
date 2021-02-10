import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';


interface Props {
            tuotteita : string,
          }

const Tuotenostot : React.FC<Props> = (props : Props) => {

  const [nayta, setNayta]  = useState<boolean>(false);
  const [nayta2, setNayta2]  = useState<boolean>(false);
  const [nayta3, setNayta3]  = useState<boolean>(false);
  const [nayta4, setNayta4]  = useState<boolean>(false);
  const [nayta5, setNayta5]  = useState<boolean>(false);
  const [nayta6, setNayta6]  = useState<boolean>(false);


  const [tilaus, setTilaus] = useState<any>();
  const [tilaus2, setTilaus2] = useState<any>();
  const [tilaus3, setTilaus3] = useState<any>();
  const [tilaus4, setTilaus4] = useState<any>();
  const [tilaus5, setTilaus5] = useState<any>();
  const [tilaus6, setTilaus6] = useState<any>();


  const [kpl, setKpl] = useState<any>();
  const [vari, setVari] = useState("musta");
  const [koko, setKoko] = useState("M");
  const [lisatty, setLisatty] = useState<any>("Ostos lisätty koriin");
  const [valmis, setValmis] = useState<boolean>(false);
  const [valmis2, setValmis2] = useState<boolean>(false);
  const [valmis3, setValmis3] = useState<boolean>(false);
  const [valmis4, setValmis4] = useState<boolean>(false);
  const [valmis5, setValmis5] = useState<boolean>(false);
  const [valmis6, setValmis6] = useState<boolean>(false);


  const [paita1, setPaita1] = useState<any>(65);
  const [paita2, setPaita2] = useState<any>(73);
  const [paita3, setPaita3] = useState<any>(99);
  const [paita4, setPaita4] = useState<any>(299);
  const [paita5, setPaita5] = useState<any>(199);
  const [paita6, setPaita6] = useState<any>(19);


  const [tulostus, setTulostus] = useState<boolean>(false);
  const [tulostus2, setTulostus2] = useState<boolean>(false);
  const [tulostus3, setTulostus3] = useState<boolean>(false);
  const [tulostus4, setTulostus4] = useState<boolean>(false);
  const [tulostus5, setTulostus5] = useState<boolean>(false);
  const [tulostus6, setTulostus6] = useState<boolean>(false);


  const paivita = (event : any) : void => {
  
    setKpl(event.target.value);
  
  }
  
  const uusiTilaus = () : void => {
      
    setTilaus(tilaus);  
  
      setPaita1(paita1);
      setKpl(kpl);


  }

  const uusiTilaus2 = () : void => {

    setTilaus2(tilaus2);  
  
      setPaita2(paita2);
      setKpl(kpl);

  }

  const uusiTilaus3 = () : void => {

    setTilaus3(tilaus3);  
  
      setPaita3(paita3);
      setKpl(kpl);

  }

  const uusiTilaus4 = () : void => {

    setTilaus4(tilaus4);  
  
      setPaita4(paita4);
      setKpl(kpl);

  }

  const uusiTilaus5 = () : void => {

    setTilaus5(tilaus5);  
  
      setPaita5(paita5);
      setKpl(kpl);

  }

  const uusiTilaus6 = () : void => {

    setTilaus6(tilaus6);  
  
      setPaita6(paita6);
      setKpl(kpl);

  }

    return (

<Container>
      
      <Table>

        <h4>{props.tuotteita}</h4>
              

          <tr>
          <td>
      <Card>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita1.jpg`} />
        <Card.Body>
            <Card.Title>Hugo t-paita </Card.Title>
            <Card.Text>
              <p>Hinta: 65,00 €</p>
              <p>Kuvaus: 100 % puuvillaa</p>
              <p>Varastotilanne: varastossa</p>
              <p>Toimitusaika: 1 - 3 pv</p>
              <Button onClick={ () => { setNayta(true) } }>Tilaa</Button>
              
              <Alert show={tulostus}>
                <Alert.Heading>
                  <h4>Tiedot:</h4>  
                </Alert.Heading>
                  <h6>Yhteishinta: {paita1 * kpl} €</h6>
                  <h6>Lukumäärä: {kpl}</h6>
                  <h6>Väri: {vari}</h6>
                  <h6>Koko: {koko}</h6>
                  <Button onClick={ () => { setValmis(true) } } >Lisää ostoskoriin</Button>

              </Alert>

              <Alert show={valmis}>
                <Alert.Heading>
                  <h4>{lisatty}</h4>  
                </Alert.Heading>
                  <h6>Kiitos tilauksesta!</h6>
              </Alert>


              <Modal show={nayta}>
                <Modal.Header>
                    <h3>Valitse ominaisuudet</h3>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                  <Form.Label>
                        Valitse väri
                   </Form.Label>
                    <Form.Check type="radio" label="Musta" name="tpaita" id="musta" checked={vari == "musta"} value="musta" onClick={ () => setVari("musta")} />
                    <Form.Check type="radio" label="Valkoinen" name="tpaita" id="valkoinen" checked={vari == "valkoinen"} value="valkoinen" onClick={ () => setVari("valkoinen")} />
                    <Form.Check type="radio" label="Sininen" name="tpaita" id="sininen" checked={vari == "sininen"} value="sininen" onClick={ () => setVari("sininen")} />
                    <Form.Check type="radio" label="Punainen"name="tpaita" id="punainen" checked={vari == "punainen"} value="punainen" onClick={ () => setVari("punainen")}/>
                    <Form.Check type="radio" label="Harmaa" name="tpaita" id="harmaa" checked={vari == "harmaa"} value="harmaa" onClick={ () => setVari("harmaa")}/>
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>
                        Valitse koko
                   </Form.Label>
                    <Form.Check type="radio" label="XS" name="koko" id="xs" checked={koko == "XS"} value="XS" onClick={ () => setKoko("XS")} />
                    <Form.Check type="radio" label="S" name="koko" id="s" checked={koko == "S"} value="S" onClick={ () => setKoko("S")} />
                    <Form.Check type="radio" label="M" name="koko" id="m" checked={koko == "M"} value="M" onClick={ () => setKoko("M")} />
                    <Form.Check type="radio" label="L"name="koko" id="l" checked={koko == "L"} value="L" onClick={ () => setKoko("L")} />
                    <Form.Check type="radio" label="XL" name="koko" id="xl" checked={koko == "XL"} value="XL" onClick={ () => setKoko("XL")} />
                    <Form.Check type="radio" label="XXL" name="koko" id="xxl" checked={koko == "XXL"} value="XXL" onClick={ () => setKoko("XXL")} />
                  </Form.Group>
                  <Form.Label>
                        Valitse kappalemäärä
                   </Form.Label>
                    <Form.Control type="number" onChange={paivita} name="kpl" />
                    <Button block className="mt-2" onClick={ () => {uusiTilaus(); setNayta(false); setTulostus(true) } }>Hyväksy</Button>
                </Modal.Body>    
            </Modal>
            </Card.Text>
        </Card.Body>
      </Card>
          </td>
          <td>
      <Card>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita2.jpg`} />
        <Card.Body>
            <Card.Title>Masa t-paita</Card.Title>
            <Card.Text>
              <p>Hinta: 73,00 €</p>
              <p>Kuvaus: 100 % puuvillaa</p>
              <p>Varastotilanne: varastossa</p>
              <p>Toimitusaika: 1 - 3 pv</p>
              <Button onClick={ () => { setNayta2(true) } }>Tilaa</Button>

              <Alert show={tulostus2}>
                <Alert.Heading>
                  <h4>Tiedot:</h4>  
                </Alert.Heading>
                  <h6>Yhteishinta: {paita2 * kpl} €</h6>
                  <h6>Lukumäärä: {kpl}</h6>
                  <h6>Väri: {vari}</h6>
                  <h6>Koko: {koko}</h6>
                  <Button onClick={ () => { setValmis2(true) } } >Lisää ostoskoriin</Button>

              </Alert>

              <Alert show={valmis2}>
                <Alert.Heading>
                  <h4>{lisatty}</h4>  
                </Alert.Heading>
                  <h6>Kiitos tilauksesta!</h6>
              </Alert>


              <Modal show={nayta2}>
                <Modal.Header>
                    <h3>Valitse ominaisuudet</h3>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                  <Form.Label>
                        Valitse väri
                   </Form.Label>
                    <Form.Check type="radio" label="Musta" name="tpaita" id="musta" checked={vari == "musta"} value="musta" onClick={ () => setVari("musta")} />
                    <Form.Check type="radio" label="Valkoinen" name="tpaita" id="valkoinen" checked={vari == "valkoinen"} value="valkoinen" onClick={ () => setVari("valkoinn")} />
                    <Form.Check type="radio" label="Sininen" name="tpaita" id="sininen" checked={vari == "sininen"} value="sininen" onClick={ () => setVari("sininen")} />
                    <Form.Check type="radio" label="Punainen"name="tpaita" id="punainen" checked={vari == "punainen"} value="punainen" onClick={ () => setVari("punainen")} />
                    <Form.Check type="radio" label="Harmaa" name="tpaita" id="harmaa" checked={vari == "harmaa"} value="harmaa" onClick={ () => setVari("harmaa")} />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>
                        Valitse koko
                   </Form.Label>
                    <Form.Check type="radio" label="XS" name="koko" id="xs" checked={koko == "XS"} value="XS" onClick={ () => setKoko("XS")} />
                    <Form.Check type="radio" label="S" name="koko" id="s" checked={koko == "S"} value="S" onClick={ () => setKoko("S")} />
                    <Form.Check type="radio" label="M" name="koko" id="m" checked={koko == "M"} value="M" onClick={ () => setKoko("M")} />
                    <Form.Check type="radio" label="L"name="koko" id="l" checked={koko == "L"} value="L" onClick={ () => setKoko("L")} />
                    <Form.Check type="radio" label="XL" name="koko" id="xl" checked={koko == "XL"} value="XL" onClick={ () => setKoko("XL")} />
                    <Form.Check type="radio" label="XXL" name="koko" id="xxl" checked={koko == "XXL"} value="XXL" onClick={ () => setKoko("XXL")} />
                  </Form.Group>
                  <Form.Label>
                        Valitse kappalemäärä
                   </Form.Label>
                    <Form.Control type="number" onChange={paivita} name="kpl" />
                    <Button block className="mt-2" onClick={ () => {uusiTilaus2(); setNayta2(false); setTulostus2(true) } }>Hyväksy</Button>
                </Modal.Body>    
            </Modal>

          </Card.Text>
        </Card.Body>
      </Card>
        </td>
        </tr>

        <tr>
        <td>
      <Card>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita3.jpg`} />
          <Card.Body>
            <Card.Title>Jeans t-paita</Card.Title>
            <Card.Text>
              <p>Hinta: 99,00 €</p>
              <p>Kuvaus: 100 % puuvillaa</p>
              <p>Varastotilanne: varastossa</p>
              <p>Toimitusaika: 1 - 3 pv</p>
              <Button onClick={ () => { setNayta3(true) } }>Tilaa</Button>

              <Alert show={tulostus3}>
                <Alert.Heading>
                  <h4>Tiedot:</h4>  
                </Alert.Heading>
                  <h6>Yhteishinta: {paita3 * kpl} €</h6>
                  <h6>Lukumäärä: {kpl}</h6>
                  <h6>Väri: {vari}</h6>
                  <h6>Koko: {koko}</h6>
                  <Button onClick={ () => { setValmis3(true) } } >Lisää ostoskoriin</Button>

              </Alert>

              <Alert show={valmis3}>
                <Alert.Heading>
                  <h4>{lisatty}</h4>  
                </Alert.Heading>
                  <h6>Kiitos tilauksesta!</h6>
              </Alert>


              <Modal show={nayta3}>
                <Modal.Header>
                    <h3>Valitse ominaisuudet</h3>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                  <Form.Label>
                        Valitse väri
                   </Form.Label>
                    <Form.Check type="radio" label="Musta" name="tpaita" id="musta" checked={vari == "musta"} value="musta" onClick={ () => setVari("musta")} />
                    <Form.Check type="radio" label="Valkoinen" name="tpaita" id="valkoinen" checked={vari == "valkoinen"} value="valkoinen" onClick={ () => setVari("valkoinen")} />
                    <Form.Check type="radio" label="Sininen" name="tpaita" id="sininen" checked={vari == "sininen"} value="sininen" onClick={ () => setVari("sininen")} />
                    <Form.Check type="radio" label="Punainen"name="tpaita" id="punainen" checked={vari == "punainen"} value="punainen" onClick={ () => setVari("punainen")} />
                    <Form.Check type="radio" label="Harmaa" name="tpaita" id="harmaa" checked={vari == "harmaa"} value="harmaa" onClick={ () => setVari("harmaa")} />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>
                        Valitse koko
                   </Form.Label>
                    <Form.Check type="radio" label="XS" name="koko" id="xs" checked={koko == "XS"} value="XS" onClick={ () => setKoko("XS")} />
                    <Form.Check type="radio" label="S" name="koko" id="s" checked={koko == "S"} value="S" onClick={ () => setKoko("S")} />
                    <Form.Check type="radio" label="M" name="koko" id="m" checked={koko == "M"} value="M" onClick={ () => setKoko("M")} />
                    <Form.Check type="radio" label="L"name="koko" id="l" checked={koko == "L"} value="L" onClick={ () => setKoko("L")} />
                    <Form.Check type="radio" label="XL" name="koko" id="xl" checked={koko == "XL"} value="XL" onClick={ () => setKoko("XL")} />
                    <Form.Check type="radio" label="XXL" name="koko" id="xxl" checked={koko == "XXL"} value="XXL" onClick={ () => setKoko("XXL")} />
                  </Form.Group>
                  <Form.Label>
                        Valitse kappalemäärä
                   </Form.Label>
                    <Form.Control type="number" onChange={paivita} name="kpl" />
                    <Button block className="mt-2" onClick={ () => {uusiTilaus3(); setNayta3(false); setTulostus3(true) } }>Hyväksy</Button>
                </Modal.Body>    
            </Modal>

    </Card.Text>
</Card.Body>
</Card>
</td>

<td>
<Card>
<Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita4.jpg`} />
<Card.Body>
    <Card.Title>Retee t-paita</Card.Title>
    <Card.Text>
              <p>Hinta: 299,00 €</p>
              <p>Kuvaus: 100 % puuvillaa</p>
              <p>Varastotilanne: varastossa</p>
              <p>Toimitusaika: 1 - 3 pv</p>
              <Button onClick={ () => { setNayta4(true) } }>Tilaa</Button>

              <Alert show={tulostus4}>
                <Alert.Heading>
                  <h4>Tiedot:</h4>  
                </Alert.Heading>
                  <h6>Yhteishinta: {paita4 * kpl} €</h6>
                  <h6>Lukumäärä: {kpl}</h6>
                  <h6>Väri: {vari}</h6>
                  <h6>Koko: {koko}</h6>
                  <Button onClick={ () => { setValmis4(true) } } >Lisää ostoskoriin</Button>

              </Alert>

              <Alert show={valmis4}>
                <Alert.Heading>
                  <h4>{lisatty}</h4>  
                </Alert.Heading>
                  <h6>Kiitos tilauksesta!</h6>
              </Alert>


              <Modal show={nayta4}>
                <Modal.Header>
                    <h3>Valitse ominaisuudet</h3>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                  <Form.Label>
                        Valitse väri
                   </Form.Label>
                    <Form.Check type="radio" label="Musta" name="tpaita" id="musta" checked={vari == "musta"} value="musta" onClick={ () => setVari("musta")} />
                    <Form.Check type="radio" label="Valkoinen" name="tpaita" id="valkoinen" checked={vari == "valkoinen"} value="valkoinen" onClick={ () => setVari("valkoinen")} />
                    <Form.Check type="radio" label="Sininen" name="tpaita" id="sininen" checked={vari == "sininen"} value="sininen" onClick={ () => setVari("sininen")} />
                    <Form.Check type="radio" label="Punainen"name="tpaita" id="punainen" checked={vari == "punainen"} value="punainen" onClick={ () => setVari("punainen")} />
                    <Form.Check type="radio" label="Harmaa" name="tpaita" id="harmaa" checked={vari == "harmaa"} value="harmaa" onClick={ () => setVari("harmaa")} />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>
                        Valitse koko
                   </Form.Label>
                    <Form.Check type="radio" label="XS" name="koko" id="xs" checked={koko == "XS"} value="XS" onClick={ () => setKoko("XS")} />
                    <Form.Check type="radio" label="S" name="koko" id="s" checked={koko == "S"} value="S" onClick={ () => setKoko("S")} />
                    <Form.Check type="radio" label="M" name="koko" id="m" checked={koko == "M"} value="M" onClick={ () => setKoko("M")} />
                    <Form.Check type="radio" label="L"name="koko" id="l" checked={koko == "L"} value="L" onClick={ () => setKoko("L")} />
                    <Form.Check type="radio" label="XL" name="koko" id="xl" checked={koko == "XL"} value="XL" onClick={ () => setKoko("XL")} />
                    <Form.Check type="radio" label="XXL" name="koko" id="xxl" checked={koko == "XXL"} value="XXL" onClick={ () => setKoko("XXL")} />
                  </Form.Group>
                  <Form.Label>
                        Valitse kappalemäärä
                   </Form.Label>
                    <Form.Control type="number" onChange={paivita} name="kpl" />
                    <Button block className="mt-2" onClick={ () => {uusiTilaus4(); setNayta4(false); setTulostus4(true) } }>Hyväksy</Button>
                </Modal.Body>    
            </Modal>


    </Card.Text>
</Card.Body>
</Card>
</td>

</tr>

<tr>
<td>
<Card>
<Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita5.jpg`} />
<Card.Body>
    <Card.Title>Female t-paita</Card.Title>
    <Card.Text>
              <p>Hinta:199,00 €</p>
              <p>Kuvaus: 100 % puuvillaa</p>
              <p>Varastotilanne: varastossa</p>
              <p>Toimitusaika: 1 - 3 pv</p>
              <Button onClick={ () => { setNayta5(true) } }>Tilaa</Button>

              <Alert show={tulostus5}>
                <Alert.Heading>
                  <h4>Tiedot:</h4>  
                </Alert.Heading>
                  <h6>Yhteishinta: {paita5 * kpl} €</h6>
                  <h6>Lukumäärä: {kpl}</h6>
                  <h6>Väri: {vari}</h6>
                  <h6>Koko: {koko}</h6>
                  <Button onClick={ () => { setValmis5(true) } } >Lisää ostoskoriin</Button>

              </Alert>

              <Alert show={valmis5}>
                <Alert.Heading>
                  <h4>{lisatty}</h4>  
                </Alert.Heading>
                  <h6>Kiitos tilauksesta!</h6>
              </Alert>


              <Modal show={nayta5}>
                <Modal.Header>
                    <h3>Valitse ominaisuudet</h3>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                  <Form.Label>
                        Valitse väri
                   </Form.Label>
                    <Form.Check type="radio" label="Musta" name="tpaita" id="musta" checked={vari == "musta"} value="musta" onClick={ () => setVari("musta")} />
                    <Form.Check type="radio" label="Valkoinen" name="tpaita" id="valkoinen" checked={vari == "valkoinen"} value="valkoinen" onClick={ () => setVari("valkoinen")} />
                    <Form.Check type="radio" label="Sininen" name="tpaita" id="sininen" checked={vari == "sininen"} value="sininen" onClick={ () => setVari("sininen")} />
                    <Form.Check type="radio" label="Punainen"name="tpaita" id="punainen" checked={vari == "punainen"} value="punainen" onClick={ () => setVari("punainen")} />
                    <Form.Check type="radio" label="Harmaa" name="tpaita" id="harmaa" checked={vari == "harmaa"} value="harmaa" onClick={ () => setVari("harmaa")} />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>
                        Valitse koko
                   </Form.Label>
                    <Form.Check type="radio" label="XS" name="koko" id="xs" checked={koko == "XS"} value="XS" onClick={ () => setKoko("XS")} />
                    <Form.Check type="radio" label="S" name="koko" id="s" checked={koko == "S"} value="S" onClick={ () => setKoko("S")} />
                    <Form.Check type="radio" label="M" name="koko" id="m" checked={koko == "M"} value="M" onClick={ () => setKoko("M")} />
                    <Form.Check type="radio" label="L"name="koko" id="l" checked={koko == "L"} value="L" onClick={ () => setKoko("L")} />
                    <Form.Check type="radio" label="XL" name="koko" id="xl" checked={koko == "XL"} value="XL" onClick={ () => setKoko("XL")} />
                    <Form.Check type="radio" label="XXL" name="koko" id="xxl" checked={koko == "XXL"} value="XXL" onClick={ () => setKoko("XXL")} />
                  </Form.Group>
                  <Form.Label>
                        Valitse kappalemäärä
                   </Form.Label>
                    <Form.Control type="number" onChange={paivita} name="kpl" />
                    <Button block className="mt-2" onClick={ () => {uusiTilaus5(); setNayta5(false); setTulostus5(true) } }>Hyväksy</Button>
                </Modal.Body>    
            </Modal>


    </Card.Text>
</Card.Body>
</Card>
</td>

<td>
<Card>
<Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/kuvat/tpaita6.jpg`} />
<Card.Body>
    <Card.Title>Juntti t-paita</Card.Title>
    <Card.Text>
              <p>Hinta: 19,00 €</p>
              <p>Kuvaus: 100 % puuvillaa</p>
              <p>Varastotilanne: varastossa</p>
              <p>Toimitusaika: 1 - 3 pv</p>
              <Button onClick={ () => { setNayta6(true) } }>Tilaa</Button>

              <Alert show={tulostus6}>
                <Alert.Heading>
                  <h4>Tiedot:</h4>  
                </Alert.Heading>
                  <h6>Yhteishinta: {paita6 * kpl} €</h6>
                  <h6>Lukumäärä: {kpl}</h6>
                  <h6>Väri: {vari}</h6>
                  <h6>Koko: {koko}</h6>
                  <Button onClick={ () => { setValmis6(true) } } >Lisää ostoskoriin</Button>
              </Alert>

              <Alert show={valmis6}>
                <Alert.Heading>
                  <h4>{lisatty}</h4>  
                </Alert.Heading>
                  <h6>Kiitos tilauksesta!</h6>
              </Alert>

              <Modal show={nayta6}>
                <Modal.Header>
                    <h3>Valitse ominaisuudet</h3>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                  <Form.Label>
                        Valitse väri
                   </Form.Label>
                    <Form.Check type="radio" label="Musta" name="tpaita" id="musta" checked={vari == "musta"} value="musta" onClick={ () => setVari("musta")}/>
                    <Form.Check type="radio" label="Valkoinen" name="tpaita" id="valkoinen" checked={vari == "valkoinen"} value="valkoinen" onClick={ () => setVari("valkoinen")} />
                    <Form.Check type="radio" label="Sininen" name="tpaita" id="sininen" checked={vari == "sininen"} value="sininen" onClick={ () => setVari("sininen")} />
                    <Form.Check type="radio" label="Punainen"name="tpaita" id="punainen" checked={vari == "punainen"} value="punainen" onClick={ () => setVari("punainen")} />
                    <Form.Check type="radio" label="Harmaa" name="tpaita" id="harmaa" checked={vari == "harmaa"} value="harmaa" onClick={ () => setVari("harmaa")} />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>
                        Valitse koko
                   </Form.Label>
                    <Form.Check type="radio" label="XS" name="koko" id="xs" checked={koko == "XS"} value="XS" onClick={ () => setKoko("XS")} />
                    <Form.Check type="radio" label="S" name="koko" id="s" checked={koko == "S"} value="S" onClick={ () => setKoko("S")} />
                    <Form.Check type="radio" label="M" name="koko" id="m" checked={koko == "M"} value="M" onClick={ () => setKoko("M")} />
                    <Form.Check type="radio" label="L"name="koko" id="l" checked={koko == "L"} value="L" onClick={ () => setKoko("L")} />
                    <Form.Check type="radio" label="XL" name="koko" id="xl" checked={koko == "XL"} value="XL" onClick={ () => setKoko("XL")} />
                    <Form.Check type="radio" label="XXL" name="koko" id="xxl" checked={koko == "XXL"} value="XXL" onClick={ () => setKoko("XXL")} />
                  </Form.Group>
                  <Form.Label>
                        Valitse kappalemäärä
                   </Form.Label>
                    <Form.Control type="number" onChange={paivita} name="kpl" />
                    <Button block className="mt-2" onClick={ () => {uusiTilaus6(); setNayta6(false); setTulostus6(true) } }>Hyväksy</Button>
                </Modal.Body>    
            </Modal>


    </Card.Text>
</Card.Body>
</Card>
</td>
</tr>

      </Table>


</Container>

    )
}


export default Tuotenostot;