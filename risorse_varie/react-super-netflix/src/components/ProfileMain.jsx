import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import avatar from "../assets/avatar.png";
function ProfileMain() {
  return (
    <main className="mb-5 vh-100">
      <Container className="d-flex justify-content-center">
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={10} lg={8} xl={6}>
            <Row className="w-100">
              <Col xs={12}>
                <h1 className="display-3 fw-normal text-light">Edit Profile</h1>
                <hr />
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={4} className="d-flex justify-content-center">
                    <div className="avatar-profile position-relative mb-auto">
                      <img className="img-fluid" src={avatar} alt="" />
                      <i className="bi text-light bi-pencil-fill fs-7 position-absolute bottom-0 start-0 bg-darkgray rounded-circle px-2 py-1 mb-1 ms-1 border border-1 border-light"></i>
                    </div>
                  </Col>
                  <Col xs={8}>
                    <div className="bg-somegray border-1 p-1 mb-3">
                      <p className="m-0 fs-5 fw-semibold text-light">Strive Student</p>
                    </div>
                    <div>
                      <p className="fs-5 mb-1 text-body-secondary">language:</p>
                      <Form.Select className="fs-6 px-4 rounded-0 bg-black">
                        <option>English</option>
                        <option>Italian</option>
                        <option>Deutch</option>
                        <option>Chinese</option>
                      </Form.Select>
                      <hr />
                    </div>
                    <div className="mb-3">
                      <p className="fs-5 text-body-secondary">Maturity Setting</p>
                    </div>
                    <div className="mb-3">
                      <span className="m-0 fs-6 fw-semibold bg-body-secondary p-2 text-light">
                        ALL MATURITY SETTINGS
                      </span>
                    </div>
                    <div className="mb-3">
                      <p className="fs-6 text-light">Show title of all maturity rating for this profile.</p>
                    </div>
                    <div className="mb-3">
                      <Button variant="outline-secondary" size="sm" className="ls-2 rounded-0">
                        <span className="fs-6 px-1 ">EDIT</span>
                      </Button>
                    </div>
                    <hr />
                    <div className="mb-3">
                      <p className="fs-5 text-body-secondary">Autoplay controls</p>
                    </div>
                    <div id="check-container">
                      <label class="checkbox-wrapper d-flex align-items-center">
                        <div>
                          <input id="checkbox1" type="checkbox" />
                          <span class="checkmark"></span>
                        </div>
                        <p className="fs-7 text-light">Autoplay next episode in a series on all devices.</p>
                      </label>
                      <label class="checkbox-wrapper d-flex align-items-center">
                        <div>
                          <input id="checkbox2" type="checkbox" />
                          <span class="checkmark"></span>
                        </div>
                        <p className="fs-7 text-light">Autoplay preview while browsing on all devices.</p>
                      </label>
                    </div>
                  </Col>
                </Row>
                <hr />
              </Col>
              <Col xs={12}>
                <div className="d-flex justify-content-center gap-4">
                  <Button variant="outline-secondary" size="lg" className="rounded-0 ls-3">
                    <span className="fs-5 px-1">SAVE</span>
                  </Button>
                  <Button variant="outline-secondary" size="lg" className="rounded-0 ls-3">
                    <span className="fs-5 px-1">CANCEL</span>
                  </Button>
                  <Button variant="outline-secondary" size="lg" className="rounded-0 ls-3">
                    <span className="fs-5 px-1">DELETE PROFILE</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
export default ProfileMain;
