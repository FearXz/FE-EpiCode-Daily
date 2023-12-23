import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "http://www.omdbapi.com/?apikey=cdbdad0e";
      let response = await fetch(`${url}&s="${props.title.toLowerCase()}"`);
      let moviesRequest = await response.json();
      setMovies(moviesRequest);
    };

    fetchMovies();
  }, [props.title]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2>{props.category}</h2>
      <Slider {...settings}>
        {movies.Search &&
          movies.Search.map((movie) => (
            <div key={movie.imdbID}>
              <SingleMovie img={movie.Poster} />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default Movies;
