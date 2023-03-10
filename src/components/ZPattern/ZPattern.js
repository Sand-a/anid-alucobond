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
          <figure className="img-box-zp ">
            <img src={aboutUsData[0].image} alt="ALUCOBOND® façade" />
          </figure>

          <div className="text-box ">
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
          <div className="text-box box-zp-flip-1">
            <h1 className="secondary-headline">{aboutUsData[1].headline}</h1>
            <p className="bodytext display-linebreak">
              {aboutUsData[1].bodytext}
            </p>
            <Link className="btn btn-more" to={aboutUsData[1].path}>
              {aboutUsData[1].link}
            </Link>
          </div>
          <figure className="img-box-zp box-zp-flip-2">
            <img src={aboutUsData[1].image} alt="ALUCOBOND® façade" />
          </figure>
        </section>

        {/*   step 3 */}

        <section className="grid grid--2-cols">
          <figure className="img-box-zp ">
            <img src={aboutUsData[2].image} alt="ALUCOBOND® façade" />
          </figure>

          <div className="text-box ">
            <h1 className="secondary-headline">{aboutUsData[2].headline}</h1>
            <p className="bodytext display-linebreak">
              {aboutUsData[2].bodytext}
            </p>
            <Link className="btn btn-more" to={aboutUsData[2].path}>
              {aboutUsData[2].link}
            </Link>
          </div>
        </section>
        {/*   step 3 */}
        <section className="grid grid--2-cols">
          <div className="text-box box-zp-flip-1">
            <h1 className="secondary-headline">{aboutUsData[3].headline}</h1>
            <p className="bodytext display-linebreak">
              {aboutUsData[3].bodytext}
            </p>
            <Link className="btn btn-more" to={aboutUsData[3].path}>
              {aboutUsData[3].link}
            </Link>
          </div>
          <figure className="img-box-zp box-zp-flip-2">
            <img src={aboutUsData[3].image} alt="ALUCOBOND® façade" />
          </figure>
        </section>
      </section>
    </>
  );
};

export default ZPattern;
