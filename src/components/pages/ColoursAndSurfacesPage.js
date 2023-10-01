import React, { useState } from "react";
import "../../App.css";
import ColoursAndSurfacesCovers from "../ColoursAndSurfacesCovers/ColoursAndSurfacesCover";
import { Helmet } from "react-helmet-async";

const ColoursAndSurfacesPage = () => {
  const [imageCoverDisplay, setImageCoverDisplay] = useState(
    "/images/colours-surfaces/visuals/premium_anodised.jpg"
  );

  const handleImageCoverDisplay = (data) => {
    setImageCoverDisplay(data);
    // console.log(data);
  };
  return (
    <>
      <Helmet>
        <title>ANID &#124; ALUCOBOND&reg; Colours & Surfaces</title>
        <meta
          name="description"
          content="ALUCOBOND® open up a wide colour range and a large variety of surfaces, that leave nothing to be desired in the manifold application areas
       "
        />
        <link rel="canonical" href="/colours-surfaces" />
      </Helmet>
      <div className="image-section image-section-display">
        <img className="image-display" src={`${imageCoverDisplay}`}></img>
      </div>
      <div className="headline-container query-container">
        <h1 className="margin-top headline sec-headline headline-s">
          Colours & Surfaces<strong>.</strong>
        </h1>
        <p className="border-line border-line-black margin-bottom-10"></p>
      </div>
      <ColoursAndSurfacesCovers
        handleImageCoverDisplay={handleImageCoverDisplay}
      />
    </>
  );
};

export default ColoursAndSurfacesPage;
