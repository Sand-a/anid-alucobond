import React from "react";

import "../../App.css";
import Surfaces from "../Surfaces/Surfaces";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import DropdownMenu from "../Navbar/DropdownMenu/DropdownMenu";

const ColoursAndSurfacesSubPage = ({ item }) => {
  return (
    <>
      <DropdownMenu data={coloursSurfacesData} />
      <Surfaces item={item} />
      
    </>
  );
};

export default ColoursAndSurfacesSubPage;
