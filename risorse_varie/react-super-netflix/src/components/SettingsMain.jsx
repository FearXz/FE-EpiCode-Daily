import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import logo from "../assets/netflix_logo.png";

const SettingsMain = () => {
  return (
    <main id="settings">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div id="titolo">
              <h1>Account</h1>
              <hr className="border-2 bg-lightgray" />
            </div>
            <div id="membership" className="row flex-column flex-lg-row">
              <Col xs={12} lg={4}>
                <div className="d-flex flex-row d-lg-block justify-content-between">
                  <p className="text-lightgray fs-5">MEMBERSHIP & BILLING</p>
                  <Button variant="lightgray" size="lg" className="rounded-0 border-bottom fs-6 fw-semibold">
                    Cancel Membership
                  </Button>
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 fw-bold">student@strive.school</p>
                    <p className="mb-2 text-info">Change account email</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-lightgray">Password: *******</p>
                    <p className="mb-2 text-info">Change password</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-lightgray">Phone: 321 044 1729</p>
                    <p className="mb-2 text-info">Change phone number</p>
                  </div>
                  <hr className="border-2 bg-lightgray" />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 fw-bold">
                      <i className="bi bi-paypal"></i>
                      <span className="fst-italic">Paypal&nbsp;&nbsp;</span> Admin@strive.school
                    </p>
                    <p className="mb-2 text-info">Update payment info</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-lightgray fw-semibold"></p>
                    <p className="mb-2 text-info">Billing detail</p>
                  </div>
                  <hr className="border-2 bg-lightgray" />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2"></p>
                    <p className="mb-2 text-info">Reedeem gift card or promo code</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2"></p>
                    <p className="mb-2 text-info">Where to buy gift card</p>
                  </div>
                </div>
              </Col>
              <hr className="border-2 bg-lightgray" />
            </div>
            <div id="plane-detail" className="row flex-column flex-lg-row">
              <Col xs={12} lg={4}>
                <div>
                  <p className="text-lightgray fs-5 mb-3">PLAN DETAIL</p>
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <div>
                  <div className="d-flex justify-content-between mb-4 mb-lg-0">
                    <div className="d-flex align-items-center">
                      <p className="mb-0 fw-bold">Premium</p>
                      &nbsp; <i className="bi bi-badge-hd fs-4"></i>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 text-info">Change plan</p>
                    </div>
                  </div>
                </div>
              </Col>
              <hr className="border-2 bg-lightgray" />
            </div>
            <div id="settings" className="row flex-column flex-lg-row">
              <Col xs={12} lg={4}>
                <div>
                  <p className="text-lightgray fs-5 mb-3">SETTINGS</p>
                </div>
              </Col>
              <Col xs={12} lg={8} className="mb-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-info">Parent controls</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-info">Test partecipation</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-info">Manage download device</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-info">Activate a device</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-info">Recent device streaming activity</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 text-info">Sign out of all devics</p>
                  </div>
                </div>
              </Col>
              <hr className="border-2 bg-lightgray" />
            </div>
            <div id="my-profile" className="row flex-column flex-lg-row mb-5">
              <Col xs={12} lg={4}>
                <div>
                  <p className="text-lightgray fs-5 mb-3">MY PROFILE</p>
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-center gap-2">
                      <img className="avatar-setting img-fluid" src={avatar} alt="avatar" />
                      <p className="mb-0 fw-bold">Strive student</p>
                    </div>
                    <div>
                      <p className="mb-0 text-info">Manage profile</p>
                      <p className="mb-2 text-info">Add profile email</p>
                    </div>
                  </div>
                  <div className="row">
                    <Col xs={6}>
                      <div>
                        <p className="mb-2 text-info">Language</p>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <p className="mb-2 text-info">Viewing activity</p>
                      </div>
                    </Col>
                  </div>
                  <div className="row">
                    <Col xs={6}>
                      <div>
                        <p className="mb-2 text-info">Playback settings</p>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <p className="mb-2 text-info">Ratings</p>
                      </div>
                    </Col>
                  </div>
                  <div className="row">
                    <Col xs={6}>
                      <div>
                        <p className="mb-2 text-info">Subtitle appearance</p>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <p></p>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="border-3 super-light-gray"></hr>
    </main>
  );
};

export default SettingsMain;
