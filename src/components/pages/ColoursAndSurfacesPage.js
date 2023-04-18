import React, { useState } from "react";
import "../../App.css";
import ColoursAndSurfacesCovers from "../ColoursAndSurfacesCovers/ColoursAndSurfacesCover";

const ColoursAndSurfacesPage = () => {
  const [imageCoverDisplay, setImageCoverDisplay] = useState(
    "/images/colours-surfaces/visuals/premium_anodised.jpg"
  );

  const handleImageCoverDisplay = (data) => {
    setImageCoverDisplay(data);
    console.log(data);
  };
  return (
    <>
      <div className="image-section image-section-display">
        <img className="image-display" src={`${imageCoverDisplay}`}></img>
      </div>

      <h1 className=" margin-top primary-headline sec-headline">
        colours & surfaces
      </h1>
      <ColoursAndSurfacesCovers
        handleImageCoverDisplay={handleImageCoverDisplay}
      />
    </>
  );
};

export default ColoursAndSurfacesPage;
