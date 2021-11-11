import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./CarouselPage.css";

function CarouselPage({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  return (
    <div className="carouselPage">
        <div className="carouselPage__stripe">
      <section className="carouselPage__slider">
        <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === currentImage ? "slide active" : "slide"}
              key={index}
            >
              {index === currentImage && (
                <img
                  src={slide.image}
                  alt="calm image"
                  className="carouselPage__image"
                />
              )}
            </div>
          );
        })}
      </section>
      </div>
    </div>
  );
}

export default CarouselPage;
