import React from "react";

import "../../App.css";
import { aboutUsData } from "../Data/aboutUsData";

import ZPattern from "../ZPattern/ZPattern";
import Sections from "../Sections/Sections";

function AboutUs() {
  return (
    <>
      <section className="margin-top section-aboutus">
        <div className=" margin-bottom-10">
          <Sections
            title={[
              "About",
              <span className="name-smaller margin-left"> ANID</span>,
              <span className="headline-light-big"> | </span>,
              <span className="name-smaller"> ALUCOBOND</span>,
              <span className="headline-light-big">®</span>,
            ]}
          />
        </div>
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
