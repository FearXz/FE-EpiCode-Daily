import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

let interval: NodeJS.Timer;

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const navigate = useNavigate();

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  //   let timeout: ReturnType<typeof setTimeout>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(firstName, lastName, checkboxValue);

    setTimeout(() => {
      navigate("/");
    }, 3000);

    interval = setInterval(() => {
      console.log("Interval Happened Now");
    }, 1000);
  };

  useEffect(() => {
    return () => {
      // per testare questo effetto fai partire l'handleSubmit compilando il form e premi il bottone blu,
      // poi premi il link per cambiare pagina alla Home con il router
      // l'intervallo è stato correttamente eliminato e non continua a produrre console log all'infinito
      if (interval) {
        console.log("Cleared Interval");
        clearTimeout(interval);
      }
    };
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} className="text-start">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
              {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Check me out"
                checked={checkboxValue}
                onChange={e => {
                  setCheckboxValue(e.target.checked);
                }}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="d-block mx-auto">
              Click Me
            </Button>

            <Link to="/">
              <Button variant="link" type="submit" className="d-block mx-auto">
                Then Me to go Home
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default FormComponent;
