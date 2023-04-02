import React from "react";
import "../../App.css";
import ColoursAndSurfacesCovers from "../ColoursAndSurfacesCovers/ColoursAndSurfacesCover";
import Sections from "../Sections/Sections";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";

const ColoursAndSurfacesPage = () => {
  return (
    <>
      {coloursSurfacesData.map((item, i) => {
        return (
          <div
            className="image-section image-section-display"
            data-image-src={item.image}
          >
            {/* <img className="image-display" src={item.image}></img> */}
          </div>
        );
      })}
      <h1 className="primary-headline sec-headline">colours & surfaces</h1>
      <ColoursAndSurfacesCovers />
    </>
  );
};

export default ColoursAndSurfacesPage;
