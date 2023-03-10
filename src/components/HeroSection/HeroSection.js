import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./HeroSection.css";

import IntroSlider from "../IntroSlider/IntroSlider";
import { introProjectsData } from "../Data/introProjectsData";

const HeroSection = () => {
  return (
    <>
      <div className="container hero-section">
        <section className="grid grid-intro grid--4-cols">
          <section className="grid-box-1 slider-container ">
            <IntroSlider projectImages={introProjectsData} />
          </section>
          <section className="grid-box-2">
            <figure className="box-item">
              <Link className="section-headline" to="/about-us">
                <h1>fire-resistant &</h1>
                <h1>rear-ventilated</h1>
                <h1 className="letter-spacing">construction</h1>
              </Link>
              <img
                className="item-image"
                src="./images/hero_image/holcom_1.jpg"
                alt=""
              />
            </figure>
          </section>
          <section className="grid-box-3">
            <figure className="box-item">
              <Link className="section-headline" to="/colours-surfaces">
                <h1>Colours & Surfaces</h1>
              </Link>
              <img
                className="item-image"
                src="./images/hero_image/colours.jpg"
                alt=""
              />
            </figure>
          </section>
        </section>
      </div>
      <section>
        <div className="intermediere-container">
          <h1 className="primary-headline">ANID | ALUCOBOND®</h1>
          <p className="intermediere-p">
            Anid Construction, the exclusive distributor of ALUCOBOND® in
            Lebanon, since 1980. We are specialized in Design, Supply,
            Fabrication and Installation of ALUCOBOND® cladding. The 1st and
            original ACP, Aluminium Composite Panel, made in Germany.
            <br></br>
            From Inspiration to Assembly, and with over 40 years of experience,
            our goal is always to provide the Best Architectural Solutions in
            the most efficient and effective way,
          </p>

          <p className="intermediere-p ">
            ALUCOBOND®, the “skin of architecture”, is a core topic of modern
            construction, with a fire-retardant and rear-ventilated façades.
            They can be simple and functional, exciting and representative. We
            offert a large variety of surfaces and colours that lead to the
            creation of unique structures.
          </p>
          <div className="intermediere">
            <Link className="btn-white" to="/about-us">
              More About ANID | ALUCOBOND®
            </Link>
          </div>
        </div>
      </section>
      <section className="our-services-section">
        <h1 className="primary-headline">Our Services</h1>
        <div className="container"></div>
      </section>
      <section className="download-section">
        <h1 className="primary-headline">our projects</h1>
        <div className="container"></div>
      </section>
    </>
  );
};

export default HeroSection;
