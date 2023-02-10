import React from "react";
import "../../App.css";
import ColoursAndSurfacesCovers from "../ColoursAndSurfacesCovers/ColoursAndSurfacesCover";
import Sections from "../Sections/Sections";

const ColoursAndSurfacesPage = () => {
  return (
    <>
      <Sections
        image="/images/sections/section-1.jpg"
        title="Colours & Surfaces "
      />
      <ColoursAndSurfacesCovers />
    </>
  );
};

export default ColoursAndSurfacesPage;
