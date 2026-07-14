import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./IntroSlider.css";

export default function IntroSlider({ projectImages = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = projectImages.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((previousSlide) =>
      previousSlide === slideLength - 1 ? 0 : previousSlide + 1
    );
  }, [slideLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? slideLength - 1 : previousSlide - 1
    );
  }, [slideLength]);

  useEffect(() => {
    if (slideLength === 0) {
      return undefined;
    }

    const timer = setTimeout(nextSlide, 6000);

    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide, slideLength]);

  useEffect(() => {
    const onKeyPressed = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", onKeyPressed);

    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    };
  }, [nextSlide, prevSlide]);

  const moveDot = (index) => {
    setCurrentSlide(index);
  };

  if (slideLength === 0) {
    return null;
  }

  return (
    <section className="slider-container">
      {projectImages.map((slide, index) => (
        <div
          key={slide.id ?? slide.image ?? index}
          className={
            index === currentSlide ? "intro-slide active" : "intro-slide"
          }
        >
          {index === currentSlide && (
            <div className="project-description">
              <h1 className="headline">
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

              <div className="border-line" />

              <Link to="/projects" className="btn btn-click btn-white">
                Our Projects
              </Link>
            </div>
          )}

          <img
            src={`${process.env.PUBLIC_URL}${slide.image}`}
            alt={slide.description || slide.name || ""}
          />
        </div>
      ))}

      <div className="dots-container">
        {projectImages.map((slide, index) => (
          <button
            key={slide.id ?? slide.image ?? index}
            type="button"
            onClick={() => moveDot(index)}
            className={index === currentSlide ? "dot active" : "dot"}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}