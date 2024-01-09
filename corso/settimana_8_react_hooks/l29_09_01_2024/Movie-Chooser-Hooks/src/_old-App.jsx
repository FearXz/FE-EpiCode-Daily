import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MovieCard from "./components/MovieCard";

class App extends Component {
  state = {
    movieTitle: "Iron Man" // questo stato cambia grazie alla select -controllata-
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.movieTitle}</h1>
          <Container>
            <Row className="justify-content-center mb-3">
              <Col xs={12} md={6} lg={4}>
                {/* questa select è un componente CONTROLLATO, sfrutta il concetto del two-way data binding (collegamento a doppio filo per lettura/scrittura) */}
                <Form.Select aria-label="Default select example" value={this.state.movieTitle} onChange={e => this.setState({ movieTitle: e.target.value })}>
                  <option>Iron Man</option>
                  <option>Groot</option>
                  <option>Hulk</option>
                  <option>DeadPool</option>
                  <option>Superman</option>
                  <option>Black Panther</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={6} lg={4}>
                <MovieCard movieTitle={this.state.movieTitle} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
