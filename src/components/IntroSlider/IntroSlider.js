import React, { useState, useEffect } from "react";
import "./IntroSlider.css";

import { Link } from "react-router-dom";

export default function IntroSlider({ projectImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = projectImages.length;

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
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
    <section className="slider-container">
      {projectImages.map((slide, i) => {
        return (
          <div
            key={i}
            className={
              i === currentSlide ? `intro-slide active ` : `intro-slide`
            }
          >
            {i === currentSlide && (
              <div className="project-description">
                <h1 className="headline">
                  {" "}
                  {slide.description}
                  <strong>.</strong>
                </h1>
                <p className="project-details">
                  {slide.name}
                  <strong>.</strong>
                  <span className="project-details project-details-2">
                    {slide.region}
                  </span>
                </p>
                <p className="border-line"></p>
                <Link to="/projects">
                  <button className="btn btn-click btn-white">
                    Our Projects
                  </button>
                </Link>
              </div>
            )}

            <img src={process.env.PUBLIC_URL + slide.image} alt="" />
          </div>
        );
      })}

      <div className="dots-container">
        {Array.from({ length: projectImages.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i)}
            className={i === currentSlide ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </section>
  );
}
