import React, { useState, useEffect } from "react";
import "./IntroSlider.css";

import { Link } from "react-router-dom";

export default function IntroSlider({ projectImages }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slideLength = projectImages.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === slideLength) {
        setCurrentSlide(1);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide !== slideLength) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === slideLength) {
      setCurrentSlide(1);
    }
  };
  const prevSlide = () => {
    if (currentSlide !== 1) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 1) {
      setCurrentSlide(slideLength);
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
        return (
          <div
            key={i}
            className={
              currentSlide === i + 1 ? `intro-slide active ` : `intro-slide`
            }
          >
            <Link to={img.path}>
              <h1 className="project-description">{img.description}</h1>
              <img src={process.env.PUBLIC_URL + img.image} alt="" />
              <p className="project-details">
                {img.name} | {img.region}
              </p>
            </Link>
          </div>
        );
      })}

      <div className="dots-container">
        {Array.from({ length: projectImages.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i + 1)}
            className={currentSlide === i + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </>
  );
}
