import React from "react";
import { Routes, Route } from "react-router-dom";
import ColoursAndSurfacesSubPage from "../pages/ColoursAndSurfacesSubPage";
import ColoursAndSurfacesPage from "../pages/ColoursAndSurfacesPage";
import ColourPage from "../pages/ColourPage";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import DropdownMenu from "../Navbar/DropdownMenu/DropdownMenu";

function ColoursAndSurfacesRoutes() {
  return (
    <>
      <DropdownMenu data={coloursSurfacesData} />
      <Routes>
        <Route index element={<ColoursAndSurfacesPage />} />
        <Route path="/premium-anodised">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[0]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[0].colours} />}
          />
        </Route>
        <Route
          path="/solid"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[1]} />}
        />
        <Route
          path="/metallic"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[2]} />}
        />
        <Route
          path="/spectra"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[3]} />}
        />
        <Route
          path="/sparkling"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[4]} />}
        />
        <Route
          path="/natural"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[5]} />}
        />
        <Route
          path="/anodized-look"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[6]} />}
        />
        <Route
          path="/terra"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[7]} />}
        />
        <Route
          path="/urban"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[8]} />}
        />
        <Route
          path="/rocca"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[9]} />}
        />
        <Route
          path="/vintage"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[10]} />}
        />
        <Route
          path="/alucobond-legno"
          element={<ColoursAndSurfacesSubPage item={coloursSurfacesData[11]} />}
        />
      </Routes>
    </>
  );
}

export default ColoursAndSurfacesRoutes;
