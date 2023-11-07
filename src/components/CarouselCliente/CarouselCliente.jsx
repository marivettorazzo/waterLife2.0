"use client";

import "./carouselcliente.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import imagesForCarousel from "../../assets/models/mockImagesCarousel";
const Carouselcliente = () => {
  return (
    <div className="contentFatherCarousel">
      <div className="contentCarousel">
        <section className="slider container mb-3">
          <Carousel >
            {
              imagesForCarousel.map((item, i )=>{
                return (
                  <Carousel.Item className="slide" key={i}>
                  <img className="d-block w-100" src={item.img} alt="First slide" />
                </Carousel.Item>
                )
              })
            }
           
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
