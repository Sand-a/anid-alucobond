import React from "react";
import Sections from "../Sections/Sections";
import SectionReveal from "../SectionReveal/SectionReveal";
import VideoFrame from "../VideoFrame/VideoFrame";
import { rearVentilationData } from "../Data/rearVentilationData";

const Technical = () => {
  return (
    <>
      <section className="container margin-top  margin-bottom-5">
        <Sections title={"Fire Safety"} />
        <VideoFrame videoId="zZY0TKtUkNs" />
        <SectionReveal
          section={
            <a
              className="container pdf-download"
              target="_blank"
              href="/images/technical/pdf/ALUCOBOND_Fire_Safety_2020_EN.pdf
              "
            >
              <img src="/images/technical/fire_safety.jpg" alt="" />
              <div className="pdf-link">
                <ion-icon name="download-outline"></ion-icon>
                Download PDF
                <p>ALUCOBOND® Fire Safety</p>
              </div>
            </a>
          }
        />
      </section>
      <section id="wall" className="grey-background padding">
        <div className="container">
          <Sections title={"Install it on the wall"} />
          <div className="text-box">
            <p className="bodytext">
              ALUCOBOND® can be handled directly on the building site using
              commercially available tools. Installation is timely efficient and
              very durable. Due to the panels low weight, it is also ideally
              suitable for applications using large-sized panels.
              <br></br>
              <br></br>
              Backed by more than 50 years of experience, we can offer you a
              mature product of consistent quality. ALUCOBOND® preserves the
              aesthetic value of the property even after decades of outdoor use
              – without the usual higher maintenance costs associated with many
              alternative solutions. If one considers the low maintenance costs
              and energy efficiency together with the investment costs, the
              result is a calculation that is economically very attractive for
              large-scale projects.
            </p>
          </div>
          <div className="images-container">
            <div className="image-box">
              <img src="/images/services/icons/icon7.svg" alt="" />
              <h1 className="margin-top-5 headline ">Tray panels suspended</h1>
              <p className="bodytext">
                On stainless steel bolts / vertical panel layout
              </p>
            </div>
            <div className="image-box">
              <img src="/images/services/icons/icon8.svg" alt="" />
              <h1 className="margin-top-5 headline ">Tray panels SZ20</h1>
              <p className="bodytext">
                Tongue and groove design / horizontal panel layout
              </p>
            </div>
          </div>
          <SectionReveal
            section={
              <a
                className="container pdf-download"
                target="_blank"
                href="/images/technical/pdf/ALUCOBOND_At_a_glance_EN.pdf
              "
              >
                <img src="/images/technical/at-a-glance.jpg" alt="" />

                <div className="pdf-link">
                  <ion-icon name="download-outline"></ion-icon>
                  Download PDF
                  <p>ALUCOBOND® At a Glance</p>
                </div>
              </a>
            }
          />
        </div>
      </section>
      <section id="ventilation" className=" container padding margin-bottom-5">
        <Sections title={"Rear-Ventilated Facade System"} />
        <div className=" rear-ventialtion-img-container">
          <img
            className="rear-ventialtion-img"
            src="/images/technical/rear-ventilation.svg"
            alt=""
          />
        </div>
        <div className="container rear-ventilation-list-container">
          {rearVentilationData.map((item) => {
            return (
              <div key={item.title}>
                <h1 className="product-specification-title">{item.title}</h1>
                <ul className="product-specification-list">
                  {item.bullets.map((bullet, i) => {
                    return (
                      <>
                        <li key={bullet} className="specification">
                          {bullet}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <SectionReveal
          section={
            <a
              className="container pdf-download"
              target="_blank"
              href="/images/technical/pdf/ALUCOBOND_Facade_fascination_EN.pdf
              "
            >
              <img src="/images/technical/facade-fascination.jpg" alt="" />

              <div className="pdf-link">
                <ion-icon name="download-outline"></ion-icon>
                Download PDF
                <p>ALUCOBOND® At a Glance</p>
              </div>
            </a>
          }
        />
      </section>
    </>
  );
};

export default Technical;
