import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ color, error }) => (
  <Alert variant={color}>
    <p className="fs-1">{error}</p>
  </Alert>
);

export default Error;
