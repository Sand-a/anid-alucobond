import React from "react";

import "../../App.css";
import Surfaces from "../Surfaces/Surfaces";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import DropdownMenu from "../Navbar/DropdownMenu/DropdownMenu";
import { Helmet } from "react-helmet-async";

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
    </>
  );
};

export default ColoursAndSurfacesSubPage;
