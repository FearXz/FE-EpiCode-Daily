import React from "react";
import { Navbar, Container, Nav, Button, Image, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNavbar(props) {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="text-white " as={NavLink} to="/">
          <Image src="netflix_logo.png" alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <NavLink className="nav-link" as={NavLink} to={"/"}>
              Home
            </NavLink>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently added</Nav.Link>
            <Nav.Link href="#">My list</Nav.Link>
            <NavLink className="nav-link d-lg-none" as={NavLink} to={"/profile"}>
              Profile
            </NavLink>
            <NavLink className="nav-link d-lg-none" as={NavLink} to={"/settings"}>
              Settings
            </NavLink>
          </Nav>
          <div id="rightbar" className="d-none d-lg-flex justify-content-around align-items-center">
            <i className="bi bi-search text-white px-3"></i>
            <p className="text-white px-3 m-0">KIDS</p>
            <i className="bi bi-bell-fill text-white px-3"></i>

            <Dropdown className="btn-group">
              <Button variant="darkgray" size="sm">
                <Image className="avatar px-3" src="avatar.png" alt="avatar" />
              </Button>
              <Dropdown.Toggle split variant="darkgray" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/settings">
                  Settings
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
