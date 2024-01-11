import React from "react";
import MyNavbar from "./MyNavbar";
import { Col, Container, Row } from "react-bootstrap";

function Header(props) {
  return (
    <header>
      <Container className=" mb-5">
        <Row>
          <Col xs={12}>
            <MyNavbar />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
