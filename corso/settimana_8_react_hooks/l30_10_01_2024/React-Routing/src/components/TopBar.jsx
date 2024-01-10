import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const TopBar = ({ brand, claim }) => {
  const location = useLocation();
  console.log("LOCATION", location);

  const isValidLocation = location.pathname === "/" || location.pathname === "/prenotazioni" || location.pathname === "/prenota" || location.pathname.includes("menu");
  // ignorerà la visualizzazione della navbar per tutte le rotte non valide

  if (isValidLocation) {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid="xl">
          <Navbar.Brand href="#home">
            {brand} — {claim}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/prenotazioni" className={`nav-link ${location.pathname === "/prenotazioni" ? "active" : ""}`}>
              Prenotazioni
            </Link>
            <Link to="/prenota" className={`nav-link ${location.pathname === "/prenota" ? "active" : ""}`}>
              Prenota tavolo
            </Link> */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/prenotazioni" className="nav-link">
                Prenotazioni
              </NavLink>
              <NavLink to="/prenota" className="nav-link">
                Prenota tavolo
              </NavLink>
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default TopBar;
