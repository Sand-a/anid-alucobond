import React from "react";
import "./ZPattern.css";
import { Link } from "react-router-dom";
import { aboutUsData } from "../Data/aboutUsData";

const ZPattern = () => {
  return (
    <>
      <section className="container z-pattern">
        {/*   step 1 */}

        <section className="grid grid--2-cols">
          <figure className="img-box">
            <img src={aboutUsData[0].image} alt="ALUCOBOND® façade" />
          </figure>

          <div className="text-box">
            <h1 className="secondary-headline">{aboutUsData[0].headline}</h1>
            <p className="bodytext display-linebreak">
              {aboutUsData[0].bodytext}
            </p>
            <Link className="btn btn-more" to={aboutUsData[0].path}>
              {aboutUsData[0].link}
            </Link>
          </div>
        </section>

        {/*   step 2 */}
        <section className="grid grid--2-cols">
          <div className="text-box">
            <h1 className="secondary-headline">{aboutUsData[1].headline}</h1>
            <p className="bodytext display-linebreak">
              {aboutUsData[1].bodytext}
            </p>
            <Link className="btn btn-more" to={aboutUsData[1].path}>
              {aboutUsData[1].link}
            </Link>
          </div>
          <figure className="img-box">
            <img src={aboutUsData[1].image} alt="ALUCOBOND® façade" />
          </figure>
        </section>
      </section>
    </>
  );
};

export default ZPattern;
