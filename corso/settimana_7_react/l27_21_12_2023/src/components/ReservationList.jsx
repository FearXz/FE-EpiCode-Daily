// ReservationList è un componente che recupererà dal server la lista delle prenotazioni
// esistenti e si occuperà di presentarle all'utente

import { Component } from "react";
// import { Container, Row, Col } from 'react-bootstrap'
// un import generico come questo importa l'intera libreria react-bootstrap
// anche se ne state selezionando solo 3 componenti

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Alert, Spinner } from "react-bootstrap";
// degli import così selettivi, se eseguiti come prassi, renderanno
// il bundle della vostra applicazione più leggero nel momento in cui
// la dovrete deployare online

// recuperare una risorsa può richiedere del tempo, anche svariati secondi
// un'applicazione moderna presenta all'utente le parti statiche IMMEDIATAMENTE,
// mostrando un indicatore di caricamento per addolcire l'attesa del contenuto dinamico

// se il vostro componente necessita di recuperare una risorsa esterna,
// createlo come CLASSE

// PASSAGGI IN CORSO:
// 1) lo stato viene inizializzato con un array reservations vuoto
// 2) render() viene invocato per la prima volta, essendo già collegato
// allo stato ma non avendo elementi da mostrare al momento, renderizzerà
// solamente le parti STATICHE dell'interfaccia (titolo, struttura di BS etc.)
// 3) finito il primo render, parte (se presente) componentDidMount
// 4) componentDidMount esegue la funzione di fetch() e recupera i dati.
// finito il recupero, i dati vengono inseriti nello stato con un setState
// 5) a causa del setState e del cambiamento di stato, render() viene invocato
// una seconda volta: le parti statiche sono le stesse di prima, ma il contenuto
// della lista questa volta è diverso e questa seconda invocazione si
// occuperà di popolarla con i nuovi list items

class ReservationList extends Component {
  state = {
    reservations: [],
    // inizializzare reservations come array vuoto è un'ottima scelta
    // in quanto rispecchia il tipo di dato che andremo a recuperare
    // e fa in modo che un eventuale .map() nel JSX semplicemente
    // non renderizzi alcun elemento dinamico
    hasError: false,
    isLoading: true
  };

  // quindi quello che ci servirebbe sarebbe un modo per effettuare
  // il fetch delle prenotazioni immediatamente dopo la presentazione
  // delle parti STATICHE della pagina
  // sarebbe fantastico trovare un modo per recuperare i dati
  // DOPO la prima invocazione di render()...

  componentDidMount = () => {
    // componentDidMount succede un istante dopo la fine del montaggio
    // del componente (ovvero la prima invocazione di render() )
    console.log("sono componentDidMount");
    // componentDidMount viene eseguito UNA VOLTA SOLA

    // il fatto che componentDidMount venga eseguito una volta sola,
    // unito al fatto che viene eseguito in modo NON-BLOCCANTE
    // (dopo il render iniziale) lo rende PERFETTO per eseguire
    // operazioni di fetch() iniziali

    // invoco fetchReservations()
    this.fetchReservations();
  };

  fetchReservations = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/reservation");
      if (response.ok) {
        let reservations = await response.json();
        // salvare nello state il nostro array data

        this.setState({ reservations });

        // ogni volta che cambia lo stato, render() viene invocato di nuovo
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    // render viene eseguito la prima volta al montaggio,
    // ma viene eseguito NUOVAMENTE ogni volta che c'è un cambio nello
    // state o nelle props
    console.log("sono render");
    // this.fetchReservations() // !!! DA NON FARE ASSOLUTAMENTE !!!
    // fare un setState nel render === infinite loop
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-4 d-inline-block">Prenotazioni attuali:</h2>
            {this.state.hasError && <Alert variant="danger">Errore nel caricamento dati</Alert>}
            {this.state.isLoading && <Spinner animation="border" variant="primary" className="ms-2" />}
            {/* qua inseriamo la lista dinamica */}
            <ListGroup>
              {this.state.reservations.length > 0 && !this.state.isLoading && !this.state.hasError && (
                <>
                  {this.state.reservations.map(reservation => (
                    <ListGroup.Item key={reservation._id} className="d-flex justify-content-between">
                      <span>
                        {reservation.name} per <strong>{reservation.numberOfPeople}</strong>
                      </span>
                      {/* voglio trasformare la proprietà dateTime della prenotazione in qualcosa di più leggibile*/}
                      <span>{new Date(reservation.dateTime).toLocaleTimeString()}</span>
                    </ListGroup.Item>
                  ))}
                </>
              )}
              {this.state.reservations.length === 0 && !this.state.hasError && this.state.isLoading && (
                <Alert variant="info">Caricamento...</Alert>
              )}
              {this.state.reservations.length === 0 && !this.state.hasError && !this.state.isLoading && (
                <ListGroup.Item>Non ci sono prenotazioni al momento</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReservationList;
