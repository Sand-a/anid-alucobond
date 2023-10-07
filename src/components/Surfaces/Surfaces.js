import React, { useState } from "react";

import "./Surfaces.css";
import Sections from "../Sections/Sections";
import ModalColour from "../Modal/ModalColour";
import SectionReveal from "../SectionReveal/SectionReveal";

const Surfaces = ({ item }) => {
  const [openColourModal, setOpenColourModal] = useState(false);
  const [openColour, setOpenColour] = useState("");

  return (
    <>
      <div className="margin-top-5 surface-section container">
        <div className="  surface-title margin-bottom-3">
          <Sections title={item.title} />
        </div>
        <div className="img-box">
          <img src={item.image} alt="Façade" />
        </div>
        <div className="text-box">
          <h2 className=" headline headline-s margin-bottom-3">
            {item.textTitle}
          </h2>
          <p className="bodytext display-linebreak">{item.text}</p>

          {item.bullet_pts === true && (
            <ul className="bodytext">
              {item.pts.map((pt, i) => {
                return <li className="bullet-pt">{pt}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
      <SectionReveal
        section={
          <section>
            <div className="chart-section">
              <h1 className="headline headline-s">{item.subTitle}</h1>

              <div className="container img-surface-gallery">
                {item.colours.map((colour, i) => {
                  return (
                    <button
                      onClick={() => {
                        setOpenColourModal(true);
                        setOpenColour(colour);
                        document.body.style.overflow = "hidden";
                      }}
                      key={colour._id}
                      className="colours-links"
                      data-tooltip={`${colour._id} ${colour.name}`}
                      id={colour._id}
                    >
                      <img src={colour.image} alt={"surface colour"} />
                    </button>
                  );
                })}
              </div>
            </div>
            <ModalColour
              open={openColourModal}
              onClose={() => {
                setOpenColourModal(false);
                document.body.style.overflow = "auto";
              }}
              colour={openColour}
            />
          </section>
        }
      />
    </>
  );
};

export default Surfaces;
