import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import menu from "../data/menu.json";
import { Link } from "react-router-dom";

const Menu = () => (
  <Container className="mt-5">
    <h1 className="text-center">Menu del giorno</h1>
    <Row className="justify-content-center gy-2">
      {menu.map(dish => (
        <Col xs={12} md={8} lg={7} key={`dish-${dish.id}`}>
          <Card>
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>
                <p>{dish.description}</p>
                <Badge bg="danger me-1">{dish.label}</Badge>
                <Badge bg="info">{dish.price}</Badge>
              </Card.Text>
              <Link to={`/menu/dettagli/${dish.id}`} className="btn btn-dark w-100">
                Vai al dettaglio
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Menu;
