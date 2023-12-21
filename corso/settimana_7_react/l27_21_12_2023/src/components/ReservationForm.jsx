import { Component } from "react";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
// import TestComponent from "./TestComponent";

// proprietà che il server si aspetta di ricevere da noi per ogni prenotazione inviata:

// name <-- string
// phone <-- string
// numberOfPeople <-- string/number
// smoking <-- boolean
// dateTime <-- date/string
// specialRequests <-- string

class ReservationForm extends Component {
  state = {
    userName: "Stefano Miceli",
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "1",
      smoking: false,
      dateTime: "",
      specialRequests: ""
    },
    hasAlert: false,
    alert: {
      message: "",
      status: null,
      variant: "primary"
    },
    isLoading: false
  };

  handleLoading = loading => {
    this.setState({ isLoading: loading });
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ reservation: { ...this.state.reservation, [propertyName]: propertyValue } });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.handleLoading(true);

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation", {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        this.setState({
          reservation: {
            name: "",
            phone: "",
            numberOfPeople: "1",
            smoking: false,
            dateTime: "",
            specialRequests: ""
          }
        });

        const newReserv = await response.json();

        this.setState({
          hasAlert: true,
          alert: {
            ...this.state.alert,
            message: "la prenotazione " + newReserv._id + " è stata registrata con successo",
            status: response.status,
            variant: "success"
          }
        });

        setTimeout(
          () => this.setState({ hasAlert: false, alert: { message: "", status: null, variant: "primary" } }),
          2500
        );
      } else {
        // siamo nel caso di errore con uno status >= 400

        // gestiamo l'avviso
        this.setState({
          hasAlert: true,
          alert: {
            message: "Errore nell'invio dei dati. Status: " + response.status,
            variant: "danger",
            status: response.status
          }
        });
        // spegnamo l'avviso
        setTimeout(
          () => this.setState({ hasAlert: false, alert: { message: "", status: null, variant: "primary" } }),
          2500
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.handleLoading(false);
    }
  };

  render() {
    return (
      <Container className={this.props.className}>
        <h2 className="text-center mt-5">Prenota il tuo tavolo</h2>

        {/* <TestComponent reservation={this.state.reservation} /> */}

        <Row className="justify-content-center">
          <Col md={8}>
            {this.state.hasAlert && <Alert variant={this.state.alert.variant}>{this.state.alert.message}</Alert>}

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome"
                  value={this.state.reservation.name}
                  onChange={event =>
                    // this.setState({ reservation: { ...this.state.reservation, name: event.target.value } })
                    this.handleChange("name", event.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+393xxxx"
                  value={this.state.reservation.phone}
                  onChange={event =>
                    // // this.setState({ reservation: { ...this.state.reservation, phone: event.target.value } })
                    this.handleChange("phone", event.target.value)
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Numero di persone</Form.Label>
                <Form.Select
                  value={this.state.reservation.numberOfPeople}
                  onChange={event => this.handleChange("numberOfPeople", event.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Fumatori"
                  checked={this.state.reservation.smoking}
                  onChange={event => this.handleChange("smoking", event.target.checked)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Data e ora</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={this.state.reservation.dateTime}
                  onChange={event => this.handleChange("dateTime", event.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Richieste particolari? Scrivile qui.."
                  rows={4}
                  value={this.state.reservation.specialRequests}
                  onChange={event => this.handleChange("specialRequests", event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
                {this.state.isLoading && <Spinner animation="border" variant="light" size="sm" className="ms-2" />}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ReservationForm;
