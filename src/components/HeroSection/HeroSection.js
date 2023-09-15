import { Link } from "react-router-dom";
import "../../App.css";
import "./HeroSection.css";

import IntroSlider from "../IntroSlider/IntroSlider";
import { introProjectsData } from "../Data/introProjectsData";
import SectionReveal from "../SectionReveal/SectionReveal";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <IntroSlider projectImages={introProjectsData} />
      </div>

      <SectionReveal
        section={
          <section className="section--0 section--2">
            <div className="box-container">
              <div className="headline-box">
                <h1 className="headline">
                  Timeless Design<strong>.</strong>
                </h1>
                <p className="border-line border-line-black"></p>
                <div className="testemonial">
                  <p className="bodytext">
                    ANID Construction, exclusive distributor of ALUCOBOND® in
                    Lebanon, since 1981. The 1st and original ACP, Aluminium
                    Composite Panel, made in Germany.
                    <br></br>Over 40 years of experience, our goal is always to
                    provide the Best Architectural Solutions in the most
                    Efficient and Effective way.
                    <br></br>ALUCOBOND® THE NAME SAY IT ALL.
                  </p>
                </div>
                <Link to="/about-us">
                  <button className="btn btn-click btn-black">About us</button>
                </Link>
              </div>
            </div>
          </section>
        }
      />
      <SectionReveal
        section={
          <section className="section--0 section--3 container ">
            <img src="./images/hero_image/holcom_1.jpg" alt="" />

            <h1 className="headline headline-s">
              The Skin of Architecture<strong>.</strong>
            </h1>
            <p className="border-line border-line-black "></p>
            <p className="bodytext ">
              ALUCOBOND® is a Core Topic of modern construction, with
              FIRE-RETARDANT & REAR-VEBTILATED façades. <br></br>
              They can be Simple & Functional, Exciting & Representative.
              <br></br> We build 5 performances to insure the protection of
              people living in the building: <br></br>Supporting structure,
              insulation, cavity barriers, substructure and cladding.<br></br>
              The fire protection regulations for the building envelope can vary
              greatly from country to country.
            </p>
            <div className="youtube-link">
              <ion-icon name="logo-youtube"></ion-icon>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=zZY0TKtUkNs"
                className="btn btn-more"
              >
                YouTube
              </a>
            </div>
          </section>
        }
      />
      <SectionReveal
        section={
          <section className="section--0 section--4">
            <div className="center-element">
              <ul className="section--service-list container">
                <li className=" section--service-item">
                  Design<strong>.</strong>{" "}
                </li>
                <li className=" section--service-item">
                  Supply<strong>.</strong>
                </li>
                <li className=" section--service-item">
                  Fabrication<strong>.</strong>
                </li>
                <li className=" section--service-item">
                  Installation<strong>.</strong>
                </li>{" "}
              </ul>
            </div>

            <div className="container sevice-description ">
              <div className="service-headlines">
                <h1 className="headline headline-s">
                  From Inspiration to Assembly<strong>.</strong>
                </h1>
                <p className="border-line border-line-black"></p>

                <p className="bodytext">
                  We are Specialised in ALUCOBOND® cladding systhems. Our unique
                  expertise and knowledge in the field, has made us the leading
                  manufacturer, fabricator and installer in our local market.
                  <br></br>
                  Get support during the planning of your ALUCOBOND® projects.
                  <br></br>Possibility of project specific mock-ups including
                  technical feasibility tests.
                </p>
              </div>

              <Link to="/services">
                <button className="btn btn-click btn-black">
                  Our Services
                </button>
              </Link>
            </div>
          </section>
        }
      />
      <SectionReveal
        section={
          <section className="section--0 section--5 container ">
            <img src="./images/hero_image/colours.jpg" alt="" />

            <div className="c-s-headlines">
              <h1 className="headline headline-s">
                Creative & Unique Structures<strong>.</strong>
              </h1>
              <p className="border-line border-line-black"></p>
              <p className="bodytext">
                The well-known aluminium composite materials ALUCOBOND® open up
                a wide colour range and a large variety of surfaces, that leave
                nothing to be desired in the manifold application areas.{" "}
                <br></br>
                <i>
                  <strong>*</strong> Custom colours are available upon special
                  request subject to minimum order quantities.
                </i>
              </p>{" "}
              <Link
                to="/colours-surfaces
              "
              >
                <button className="btn btn-click btn-black">
                  Colours & Surfaces
                </button>
              </Link>
            </div>
          </section>
        }
      />
    </>
  );
};

export default HeroSection;
