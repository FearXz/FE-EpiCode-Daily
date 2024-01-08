import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    selected: null // questo è lo stato che prima viveva in <Table />, verrà ancora usato dallo stesso Table, ma esisterà ad un livello superiore!
  };

  // l'unico modo per settare lo stato di App è chiamare this.setState in questo contesto!

  setAppState = selectedItem => {
    // selectedItem sarà "First", "Third" ecc....
    this.setState({ selected: selectedItem });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col md={6}>
                {/* stiamo passando la definizione di funzione (metodo della classe App) come VALORE della prop chiamata con lo stesso nome (setAppState)
                di conseguenza, se una prop contiene un metodo possiamo chiamarla da dentro il componente come fosse una funzione */}
                <Table selected={this.state.selected} setAppState={this.setAppState} />
              </Col>
              <Col md={6}>
                <div>
                  <div>
                    <Detail selected={this.state.selected} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
        <Footer selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
