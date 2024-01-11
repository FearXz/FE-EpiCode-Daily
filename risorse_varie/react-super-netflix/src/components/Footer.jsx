import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="pt-5 mb-2 text-secondary">
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={12} className="mb-2">
                <div id="icon" className="d-flex gap-4">
                  <i className="bi bi-facebook fs-4"></i>
                  <i className="bi bi-instagram fs-4"></i>
                  <i className="bi bi-twitter-x fs-4"></i>
                  <i className="bi bi-youtube fs-4"></i>
                </div>
              </Col>
              <Col xs={12} className="fs-7 mb-2">
                <Row>
                  <Col xs={3}>
                    <p>Audio and Subtitle</p>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                  </Col>
                  <Col xs={3}>
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                  </Col>
                  <Col xs={3}>
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                  </Col>
                  <Col xs={3}>
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="fs-7 mb-3">
                <div>
                  <span className="border border-secondary border-1 py-1 px-2"> Service Code</span>
                </div>
              </Col>
              <Col xs={12} className="fs-8">
                <div>
                  <p>&copy; 1997-2019 Netflix, Inc.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
