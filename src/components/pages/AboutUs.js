import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Sections from "../Sections/Sections";
import ZPattern from "../ZPattern/ZPattern";

function AboutUs() {
  return (
    <>
      <section className="section-aboutus">
        <Sections
          image="/images/sections/section-1.jpg"
          title="About ANID | ALUCOBOND® "
        />
        <ZPattern />
        <p className="section-bottom-spacing"></p>
      </section>
    </>
  );
}

export default AboutUs;
