import React, { useEffect, useState } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Poster from "./Poster";

const Gallery = ({ movieList, id, title }) => {
  useEffect(() => {
    fixClickAnimation();
  }, []);

  function fixClickAnimation() {
    const innerCarousel = document.querySelectorAll(".carousel-inner");
    if (innerCarousel) {
      innerCarousel.forEach((carousel) => {
        carousel.classList.add("overflow-visible");
      });
    }
    let timeout;
    let buttons = document.querySelectorAll(".carousel a[role=button]");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let inner = event.currentTarget.closest(".carousel").querySelector(".carousel-inner");
        inner.classList.add("overflow-hidden");
        inner.classList.remove("overflow-visible");
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          inner.classList.add("overflow-visible");
          inner.classList.remove("overflow-hidden");
        }, 650);
      });
    });
  }
  function fixAutoAnimation() {
    let inners = document.querySelectorAll(".carousel-inner");
    inners.forEach((inner) => {
      inner.classList.add("overflow-hidden");
      inner.classList.remove("overflow-visible");
      setTimeout(function () {
        inner.classList.add("overflow-visible");
        inner.classList.remove("overflow-hidden");
      }, 650);
    });
  }

  const isSm = useMediaQuery({ maxWidth: 767 });
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isXl = useMediaQuery({ minWidth: 1200 });
  const [maxSliderItem, setMaxSliderItem] = useState(3);
  const [movieMatrix, setMoviesMatrix] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    if (isXl) setMaxSliderItem(6);
    else if (isMd) setMaxSliderItem(4);
    else if (isSm) setMaxSliderItem(3);
  }, [isSm, isMd, isXl]);

  useEffect(() => {
    const matrix = [];
    for (let i = 0; i < movieList.length; i += maxSliderItem) {
      matrix.push(movieList.slice(i, i + maxSliderItem));
    }
    setMoviesMatrix(matrix);
  }, [movieList, maxSliderItem]);

  useEffect(() => {
    if (activeIndex == movieMatrix.length) {
      fixAutoAnimation();
      setActiveIndex(0);
    }
  }, [movieMatrix]);

  return (
    <Container id={id} className="mb-5">
      <h3 className="text-white">{title}</h3>
      <Carousel
        id="carouselExample"
        className="slide"
        indicators={false}
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {movieMatrix.map((moviesArray, arrayIndex) => (
          <Carousel.Item key={"carouselItem-" + arrayIndex}>
            <Row className="gx-1">
              {moviesArray.map((movie, index) => (
                <Poster
                  key={"poster-" + arrayIndex + "-" + index}
                  responsive={isSm ? "col-4" : isMd ? "col-4 col-md-3" : isXl ? "col-4 col-md-3 col-xl-2" : "kebab"}
                  poster={movie}
                />
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
