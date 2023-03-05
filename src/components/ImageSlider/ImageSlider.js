import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import BtnSlider from "./BtnSlider";
import { Link } from "react-router-dom";

export default function ImageSlider({ projectImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = projectImages.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === slideLength - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 8000);
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
    <div className="container-slider">
      <Link className="btn-close" to="/projects">
        <ion-icon name="close-outline"></ion-icon>
      </Link>
      {projectImages.map((img, i) => {
        const styles = {
          transform: `translateX(${i * 100}%)`,
        };
        return (
          <div
            key={i}
            className={
              currentSlide === i + 1
                ? `slide active slide--${i + 1}`
                : `slide slide--${i + 1}`
            }
            style={
              currentSlide === 0
                ? styles
                : { transform: `translateX(${100 * (i - currentSlide)}%)` }
            }
          >
            <img src={process.env.PUBLIC_URL + img} alt="" />
          </div>
        );
      })}

      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      <div className="container-dots">
        {Array.from({ length: projectImages.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i)}
            className={currentSlide === i ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
