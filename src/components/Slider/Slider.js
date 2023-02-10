import React, { useState } from "react";
import "./Slider.css";
import { sliderData } from "./sliderData";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="slider">
      {sliderData.map((slide, i) => {
        return (
          <div
            className={i === currentSlide ? "slide-auto current" : "slide-auto"}
            key={i}
          >
            {i === currentSlide && (
              <>
                <img src={slide.image} alt="slide" />
                <div className="slide-content">
                  <h1>{slide.headline}</h1>
                  <p>
                    {slide.name} &#124; {slide.region}.
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
