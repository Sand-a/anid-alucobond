import React from "react";
import SectionReveal from "../SectionReveal/SectionReveal";
import "./OurServices.css";
import Sections from "../Sections/Sections";

const OurServices = () => {
  return (
    <>
      <div className="image-design image-section">
        <img src="/images/services/alucobond-design.jpg" alt="" />
      </div>
      <div className="margin-top">
        <Sections title={"Our Services"} />
        <div className="container query-container ">
          <p className="margin-bottom-10 bodytext">
            Being the exclusive representative of ALUCOBOND® in Lebanon, our
            portfolio consists of many thousands of squared meters fabricated
            and installed each year since 1981.
            <br></br>
            Furthermore, we have developed a reputation for outstanding quality
            work and professionalism.
            <br></br>
            Our factory is equipped with high quality and modern european
            machineries (CNCs) which allow us to deliver the best quality
            output, in huge quantities and fast delivery times.
            <br></br>
            Our highly skilled engineers and specialized workforce are dedicated
            to offer you the best architectural solutions in the most efficient
            and effective way.
            <br></br>
            We offer a full service:
          </p>
        </div>
      </div>
      <SectionReveal
        section={
          <div className="section-services ">
            <div className="container query-container design-container">
              <h1 className="service-card-title">
                Design<strong>.</strong>
              </h1>
              <p className="bodytext">
                Get support on your ALUCOBOND® design projects from our in-house
                experts. Architectural creativity, individual expressiveness and
                also unique form and colour concepts can easily be implemented
                using the wide product range of ALUCOBOND®.<br></br>
                Possibility of project specific mock-ups including technical
                feasibility tests.<br></br>
                Custom colours are available upon special request subject to
                minimum order quantities.
              </p>
            </div>

            <div className="card-container query-container grid grid--3-cols">
              <SectionReveal
                section={
                  <div className="service-card">
                    <img
                      src="/images/services/alucobond-supply.jpg"
                      alt=""
                      className="service-card-image"
                    />
                    <div className="service-card-text">
                      <h1 className="service-card-title">
                        Supply<strong>.</strong>
                      </h1>
                      <ul className="service-list-items">
                        <li className="service-list-item">
                          <ion-icon name="tablet-landscape-outline"></ion-icon>
                          ALUCOBOND® Panel
                        </li>
                        <li className="service-list-item">
                          {" "}
                          <ion-icon name="unlink-outline"></ion-icon>Aluminum
                          U-Channel
                        </li>
                        <li className="service-list-item">
                          <ion-icon name="sync-outline"></ion-icon>Brackets &
                          Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                }
                direction={"left"}
              />

              <SectionReveal
                direction={"none"}
                section={
                  <div className="service-card">
                    <img
                      src="/images/services/alucobond-fabrication.jpg"
                      alt=""
                      className="service-card-image"
                    />
                    <div className="service-card-text">
                      <h1 className="service-card-title">
                        Fabrication<strong>.</strong>
                      </h1>

                      <ul className="service-list-items">
                        <li className="service-list-item">
                          <ion-icon name="glasses-outline"></ion-icon>
                          Design & Details Support
                        </li>
                        <li className="service-list-item">
                          <ion-icon name="triangle-outline"></ion-icon>
                          AUTOCAD Shop-Drawings
                        </li>
                        <li className="service-list-item">
                          {" "}
                          <ion-icon name="grid-outline"></ion-icon> Mock-ups
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              />
              <SectionReveal
                direction={"right"}
                section={
                  <div className="service-card">
                    <img
                      src="/images/services/alucobond-installation.jpg"
                      alt=""
                      className="service-card-image"
                    />
                    <div className="service-card-text">
                      <h1 className="service-card-title">
                        Installation<strong>.</strong>
                      </h1>

                      <ul className="service-list-items">
                        <li className=" service-list-item">
                          <ion-icon name="keypad-outline"></ion-icon>
                          ALUCOBOND® Cladding <br></br>Turn-Key Solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    </>
  );
};

export default OurServices;
