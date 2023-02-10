import React, { useState, useEffect } from "react";
import "./IntroSlider.css";

import { Link } from "react-router-dom";

export default function IntroSlider({ projectImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = projectImages.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === slideLength - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide !== slideLength - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === slideLength - 1) {
      setCurrentSlide(0);
    }
  };
  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 0) {
      setCurrentSlide(slideLength - 1);
    }
  };
  const onKeyPressed = (e) => {
    e.key === "ArrowLeft" && prevSlide();
    e.key === "ArrowRight" && nextSlide();
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed, true);
  }, [currentSlide]);

  const moveDot = (i) => {
    setCurrentSlide(i);
  };

  return (
    <>
      {projectImages.map((img, i) => {
        const styles = {
          transform: `translateX(${i * 100}%)`,
        };
        return (
          <div
            key={i}
            className={
              currentSlide === 0
                ? `intro-slide active intro-slide--${i + 1}`
                : `intro-slide intro-slide--${i + 1}`
            }
            style={
              currentSlide === 0
                ? styles
                : { transform: `translateX(${100 * (i - currentSlide)}%)` }
            }
          >
            <Link to={img.path}>
              <img src={process.env.PUBLIC_URL + img.image} alt="" />
            </Link>
          </div>
        );
      })}

      <div className="dots-container">
        {Array.from({ length: projectImages.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i)}
            className={currentSlide === i ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </>
  );
}
