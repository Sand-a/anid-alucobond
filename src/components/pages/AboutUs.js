import React from "react";

import "../../App.css";
import { aboutUsData } from "../Data/aboutUsData";
import { Helmet } from "react-helmet-async";
import ZPattern from "../ZPattern/ZPattern";
import Sections from "../Sections/Sections";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>ANID &#124; ALUCOBOND&reg; - About</title>
        <meta
          name="description"
          content="ANID, exclusive distributor of ALUCOBOND® in Lebanon. We design, supply, manufacture & install. Provide best architectural solutions in the most efficient & effective way"
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <section className="margin-top section-aboutus">
        <div className=" margin-bottom-10">
          <Sections
            title={[
              "About",
              <span className="name-smaller margin-left"> ANID</span>,
              <span className="headline-light-big">|</span>,
              <span className="name-smaller">ALUCOBOND</span>,
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
            // hash={data.hash}
            flipped={data.flipped}
          />
        ))}
      </section>
    </>
  );
}

export default AboutUs;
