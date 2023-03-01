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
        <section className="grid-box-1 slider-container ">
          <IntroSlider projectImages={introProjectsData} />
        </section>
        <section className="grid-box-2">
          <figure className="box-item">
            <Link className="section-headline" to="/about-us">
              <h1>About ANID</h1>
            </Link>
            <img
              className="item-image"
              src="./images/hero_image/img-0.jpg"
              alt=""
            />
          </figure>
        </section>
        <section className="grid-box-3">
          <figure className="box-item">
            <Link className="section-headline" to="/projects">
              <h1>our projects</h1>
            </Link>
            <img
              className="item-image"
              src="./images/hero_image/holcom_1.jpg"
              alt=""
            />
          </figure>
        </section>
        <section className="grid-box-5">
          <figure className="box-item">
            <Link className="section-headline" to="/">
              <h1>
                showroom & <br></br> mock-up
              </h1>
              <img
                className="item-image item-image-square"
                src="./images/hero_image/img-4.jpg"
                alt=""
              />
            </Link>
          </figure>
        </section>
        <section className="grid-box-4">
          <div className="box-2-items">
            <figure className="box-item">
              <Link className="section-headline" to="/services">
                <h1>our services</h1>
              </Link>
              <img
                className="item-image item-image-square"
                src="./images/hero_image/img-2.jpg"
                alt=""
              />
            </figure>
            <figure className="box-item">
              <Link className="section-headline" to="/colours-surfaces">
                <h1>colours & surfaces</h1>
              </Link>
              <img
                className="item-image item-image-square"
                src="./images/hero_image/img-3.jpg"
                alt=""
              />
            </figure>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HeroSection;
