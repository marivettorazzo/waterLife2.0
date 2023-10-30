"use client";

import "./carouselcliente.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "/images/amarelo.jpg";
import slide2 from "/images/nemo.jpg";
import slide3 from "/images/laranjinha.jpg";
const Carouselcliente = () => {
  return (
    <div className="contentFatherCarousel">
      <div className="contentCarousel">
        <section className="slider container mb-3">
          <Carousel >
            <Carousel.Item className="slide">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
      
      <div className="contentServiceDiv">
        <figure>
          <img
            src="./images/servicesWater.png"
            alt="serviços  oferecidos pela Water Life"
          />
        </figure>
      </div>
    </div>
  );
};

export default Carouselcliente;
