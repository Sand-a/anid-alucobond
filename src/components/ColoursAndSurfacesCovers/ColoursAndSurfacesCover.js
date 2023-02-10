import React from "react";
import { Link, NavLink } from "react-router-dom";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import "./ColoursAndSurfacesCovers.css";

const ColoursAndSurfacesCovers = () => {
  return (
    <>
      <div className="gallery container">
        {coloursSurfacesData.map((item) => {
          return (
            <Link
              className="colours-surface-links"
              to={item.path}
              key={item._id}
              data-tooltip={item.title}
              id={item._id}
            >
              <img src={item.imgLink} alt="chart coverpage" />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ColoursAndSurfacesCovers;
