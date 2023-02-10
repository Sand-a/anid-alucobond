import React, { useState } from "react";
import "./ImageSlider3.css";
import BtnSlider3 from "./BtnSlider3";

export default function ImageSlider3({ projectImages }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const slideLengh = projectImages.length;
  const nextSlide = () => {
    if (slideIndex !== slideLengh) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideLengh) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideLengh);
    }
  };
  const moveDot = (i) => {
    setSlideIndex(i);
  };
  return (
    <div className="container-slider">
      {projectImages.map((img, i) => {
        return (
          <div
            key={i}
            className={
              slideIndex === i + 1
                ? `slide active-anim slide--${i + 1}`
                : `slide slide--${i + 1}`
            }
          >
            <img src={process.env.PUBLIC_URL + img} alt="" />
          </div>
        );
      })}

      <BtnSlider3 moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider3 moveSlide={nextSlide} direction={"next"} />

      <div className="container-dots">
        {Array.from({ length: projectImages.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i + 1)}
            className={slideIndex === i + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
