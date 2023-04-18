import React from "react";
import { Link } from "react-router-dom";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import "./ColoursAndSurfacesCovers.css";

const ColoursAndSurfacesCovers = ({ handleImageCoverDisplay }) => {
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
              data-image-src={item.image}
              id={item._id}
              onMouseEnter={() => {
                handleImageCoverDisplay(`${item.image}`);
              }}
            >
              <img src={item.imgLink} alt="chart coverpage" />

              <h1 className="cover-name">{item.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ColoursAndSurfacesCovers;
