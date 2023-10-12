import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="bubanner1.JPEG" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bubanner2.JPEG"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="bubanner3.JPEG" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bubanner4.JPEG"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
