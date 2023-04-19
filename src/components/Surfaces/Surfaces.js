import React from "react";
import { Link } from "react-router-dom";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import "./Surfaces.css";

const Surfaces = ({ item }) => {
  return (
    <>
      <div className="margin-top surface-section">
        <h1 className="primary-headline">{item.title}</h1>
        <div className="img-box">
          <img src={item.image} alt="Façade" />
        </div>
        <p className="text-box bodytext display-linebreak">{item.text}</p>
        {item.bullet_pts === true && (
          <ul className="text-box bodytext">
            {item.pts.map((pt, i) => {
              return <li className="bullet-pt">{pt}</li>;
            })}
          </ul>
        )}
      </div>

      <div className="chart-section">
        <h1 className="primary-headline">{item.title} Surfaces</h1>

        <div className="container img-surface-gallery">
          {coloursSurfacesData[0].colours.map((colour, i) => {
            return (
              <Link
                key={colour._id}
                className="colours-links"
                to={colour.path}
                data-tooltip={colour.name}
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
