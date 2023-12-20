import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = ({ brand, claim }) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid="xl">
      <Navbar.Brand href="#home">
        {brand} — {claim}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#contatti">Contatti</Nav.Link>
          <Nav.Link href="#dove-siamo">Dove Siamo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopBar;
