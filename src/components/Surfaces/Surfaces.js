import React from "react";
import { Link } from "react-router-dom";

import "./Surfaces.css";
import Sections from "../Sections/Sections";

const Surfaces = ({ item }) => {
  return (
    <>
      <div className="margin-top surface-section container">
        <div className="  surface-title margin-bottom-5">
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

      <div className="chart-section">
        <h1 className="headline headline-s">{item.subTitle}</h1>

        <div className="container img-surface-gallery">
          {item.colours.map((colour, i) => {
            return (
              <Link
                key={colour._id}
                className="colours-links"
                to={colour.path}
                data-tooltip={`${colour._id} ${colour.name}`}
                id={colour._id}
              >
                <img src={colour.image} alt={"surface colour"} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Surfaces;
