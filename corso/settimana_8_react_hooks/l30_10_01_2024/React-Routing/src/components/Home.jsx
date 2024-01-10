import { Alert, Badge, Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import menu from "../data/menu.json";
import { useEffect } from "react";
import { useState } from "react";
import DishComments from "./DishComments";

// lo State di un componente può esistere SOLO ed esclusivamente in un componente a Classe
// occorrerà far un refactor del componente da funzione a classe eventualmente
const Home = props => {
  // si può ora creare lo Stato interno al componente, che funge da memoria interna, specifica per la singola istanza
  // ogni qualvolta un elemento dell'interfaccia sia collegato allo stato, subirà automaticamente un aggiornamento
  // questo ci permette di poterci concentrare solo sulla gestione dei dati e non preoccuparci più della loro renderizzazione nel browser

  //   sintassi antica per creazione di stato e bind dei metodi (non serve più farlo così):

  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //     this.myMethod = this.myMethod.bind(this)
  //   }

  //   lo stato si crea con un semplice:
  // state = {
  //   selectedPasta: null
  // };

  const [selectedPasta, setSelectedPasta] = useState(null);

  // componentDidMount = () => {
  //   console.log("COMPONENT DID MOUNT");
  // };
  useEffect(() => {
    // console.log("COMPONENT DID MOUNT");
  }, []);
  // da questo momento in poi potrai modificarlo NECESSARIAMENTE attraverso l'uso di setState(),
  // un metodo asincrono che oltre a modificare la proprietà dello stato notifica l'interfaccia dell'avvenuto cambiamento

  // react chiama render al primo avvio del componente e tutte le volte che verrà eseguito un setState()

  // console.log("RENDER avvenuto", this.state);
  // leggiamo lo stato aggiornato ad ogni aggiornamento del componente

  return (
    <Container className={props.className}>
      <Row className="justify-content-center text-center">
        <Col md={10}>
          {/* le prop che abbiamo utilizzato servono a rendere un componente libero di cambiare a seconda dell'utilizzo che ne facciamo.
        Un componente inserito in contesti diversi può quindi mutare nel contenuto e nell'aspetto, se e solo se abbiamo utilizzato delle 
        prop per rendere questi elementi dinamici */}
          <h2 className={props.fontSize}>Benvenuti nel nostro Reactstorante</h2>
          <p className={props.textSize}>Niente secondi piatti 🍝🍝👏</p>
        </Col>
        <Col xs={6}>
          <Carousel>
            {menu.map((dish, index) => (
              <Carousel.Item key={`dish-${index}`} onClick={() => setSelectedPasta(dish)}>
                <img src={dish.image} alt={dish.name} />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>
                    {dish.description} - <Badge bg="warning">{dish.label}</Badge>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Versione con SHORTCIRCUIT (cortocircuito) - recensioni visibili solo se esiste una pasta selezionata, altrimenti non visibili */}
        {/* short circuit orperator (&&) o il ternary, permettono di verificare l'esistenza di un valore nello stato, prima di procedere ad accedere alle sue propietà ed evitare errori */}
        {/* this.state.selectedPasta inizia come null e quindi in un contesto come quello seguente verrà valutato a false */}

        {/* {this.state.selectedPasta && (
            <Col xs={10}>
              <ListGroup>
                <h3>Recensioni per {this.state.selectedPasta.name}</h3>
                {this.state.selectedPasta.comments.map((review, index) => (
                  <ListGroup.Item key={`comment-${index}`} className="d-flex">
                    <span className="me-2">
                      <strong>{new Date(review.date).toLocaleDateString()}</strong>
                    </span>
                    <span className="me-auto">{review.author}:</span>
                    <span>{review.comment}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          )} */}

        {/* Versinoe con ternario per visualizzare recensioni o un messaggio che avvisi l'utente di fare qualcosa per vederle */}
        <Col xs={10}>
          <DishComments selectedPasta={selectedPasta} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
