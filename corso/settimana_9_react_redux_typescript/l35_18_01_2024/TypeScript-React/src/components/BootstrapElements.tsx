import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

const BootstrapElements = () => {
  return (
    <Container fluid="md">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Hello, world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolorem, ratione quas exercitationem
            necessitatibus dicta magni illo quam iure reiciendis consectetur dignissimos, excepturi eos veritatis porro.
            A autem corporis veniam?
          </p>
          <div>
            <Button variant="danger" size="lg">
              large btn
            </Button>
          </div>
          <Button disabled size="sm">
            Go to epicode.it
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapElements;
