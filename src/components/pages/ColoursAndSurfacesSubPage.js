import React from "react";

import "../../App.css";
import Surfaces from "../Surfaces/Surfaces";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import DropdownMenu from "../Navbar/DropdownMenu/DropdownMenu";
import { Helmet } from "react-helmet-async";
import SectionReveal from "../SectionReveal/SectionReveal";

const ColoursAndSurfacesSubPage = ({ item }) => {
  return (
    <>
      <Helmet>
        <title>ANID &#124; ALUCOBOND&reg; - {item.title}</title>
        <meta
          name="description"
          content={`Discover ALUCOBOND ${item.subTitle}`}
        />
        <link rel="canonical" href={item.path} />
      </Helmet>
      <DropdownMenu data={coloursSurfacesData} />
      <Surfaces item={item} />
      <SectionReveal
        section={
          <a
            className="container pdf-download"
            target="_blank"
            rel="noreferrer"
            href={`${item.pdf}`}
          >
            <img src={item.imgLink} alt="" />
            <div className="pdf-link">
              <ion-icon name="download-outline"></ion-icon>
              Download PDF
              <p>ALUCOBOND® {`${item.title} Colour Chart`}</p>
            </div>
          </a>
        }
      />
    </>
  );
};

export default ColoursAndSurfacesSubPage;
