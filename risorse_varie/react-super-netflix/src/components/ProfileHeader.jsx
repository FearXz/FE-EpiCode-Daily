import React from "react";
import { Container } from "react-bootstrap";
import netflix_logo from "../assets/netflix_logo.png";
import { Link } from "react-router-dom";

function ProfileHeader(props) {
  return (
    <header className="mb-5">
      <Container fluid className="bg-custom1">
        <Link to={"/"}>
          <img className="logo-profile" src={netflix_logo} alt="" />
        </Link>
      </Container>
    </header>
  );
}
export default ProfileHeader;
