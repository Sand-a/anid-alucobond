import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./HeroSection.css";
import logo2 from "../../logo-white.svg";
import IntroSlider from "../IntroSlider/IntroSlider";
import { introProjectsData } from "../Data/introProjectsData";

const HeroSection = () => {
  return (
    <div className="container hero-section">
      <section className="grid grid--4-cols">
        <section className="grid grid--4-cols--1 slider-container ">
          <IntroSlider projectImages={introProjectsData} />
        </section>
        <section className="grid grid--4-cols--2">
          <figure className="box-item">
            <Link to="/">
              <img className="item-logo" id="logo" src={logo2} alt="logo" />
            </Link>
            <img
              className="item-image"
              src="./images/projects/img-1.jpg"
              alt=""
            />
          </figure>
          <figure className="box-item" to="/">
            <Link>
              <img className="item-logo" id="logo" src={logo2} alt="logo" />
            </Link>
            <img
              className="item-image"
              src="./images/projects/img-1.jpg"
              alt=""
            />
          </figure>
        </section>
      </section>
      <section className="grid grid--4-cols">
        <section className="grid grid--4-cols--1">
          <div className="box-2-items">
            <figure className="box-item">
              <Link to="/">
                <img className="item-logo" id="logo" src={logo2} alt="logo" />
              </Link>
              <img
                className="item-image item-image-square"
                src="./images/projects/img-1.jpg"
                alt=""
              />
            </figure>
            <figure className="box-item">
              <Link to="/">
                <img className="item-logo" id="logo" src={logo2} alt="logo" />
              </Link>
              <img
                className="item-image item-image-square"
                src="./images/projects/img-1.jpg"
                alt=""
              />
            </figure>
          </div>
        </section>
        <section className="grid grid--4-cols--2">
          <figure className="box-item" to="/">
            <Link>
              <img className="item-logo" id="logo" src={logo2} alt="logo" />
            </Link>
            <img
              className="item-image item-image-square"
              src="./images/projects/img-1.jpg"
              alt=""
            />
          </figure>
        </section>
      </section>
    </div>
  );
};

export default HeroSection;
