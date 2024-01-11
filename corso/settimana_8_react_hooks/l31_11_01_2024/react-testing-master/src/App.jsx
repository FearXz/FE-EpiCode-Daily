import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToggleSection from "./components/ToggleSection";
import FetchComponent from "./components/FetchComponent";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <Container>
        <h1>Testing our React App</h1>

        <label htmlFor="mycheckbox">Check me</label>
        <input type="checkbox" name="checkbox" id="mycheckbox" checked={checked} onChange={() => setChecked(!checked)} data-testid="CHECKBOX_ID" />

        <Row className="justify-content-center">
          <Col xs={4}>
            <ToggleSection />
          </Col>
        </Row>

        <FetchComponent />
      </Container>
    </div>
  );
}

export default App;
