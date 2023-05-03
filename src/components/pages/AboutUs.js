import React from "react";

import "../../App.css";
import { aboutUsData } from "../Data/aboutUsData";

import ZPattern from "../ZPattern/ZPattern";

function AboutUs() {
  return (
    <>
      <section className="margin-top  section-aboutus">
        <h1 className="primary-headline margin-bottom-more">
          About ANID | ALUCOBOND®
        </h1>

        {aboutUsData.map((data) => (
          <ZPattern
            key={data.title}
            imageSrc={data.image}
            imageAlt={data.alt}
            title={data.title}
            bodytext={data.bodytext}
            link={data.link}
            path={data.path}
            flipped={data.flipped}
          />
        ))}
      </section>
    </>
  );
}

export default AboutUs;
