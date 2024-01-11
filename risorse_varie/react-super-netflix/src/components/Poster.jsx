import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Poster(props) {
  return (
    <Col className={props.responsive}>
      <Link to={`/moviedetail/${props.poster.imdbID}`}>
        <img src={props.poster.Poster} className=" img-fluid" alt="Media0" />
      </Link>
    </Col>
  );
}
export default Poster;
