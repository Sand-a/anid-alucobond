import React from "react";
import { Routes, Route } from "react-router-dom";
import ColoursAndSurfacesSubPage from "../pages/ColoursAndSurfacesSubPage";
import ColoursAndSurfacesPage from "../pages/ColoursAndSurfacesPage";

import { coloursSurfacesData } from "../Data/coloursSurfacesData";

function ColoursAndSurfacesRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<ColoursAndSurfacesPage />} />
        <Route path="/premium-anodised">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[0]} />
            }
          />
        </Route>

        <Route path="/solid">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[1]} />
            }
          />
        </Route>

        <Route path="/metallic">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[2]} />
            }
          />
        </Route>
        <Route path="/spectra">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[3]} />
            }
          />
        </Route>
        <Route path="/sparkling">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[4]} />
            }
          />
        </Route>
        <Route path="/natural">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[5]} />
            }
          />
        </Route>
        <Route path="/anodized-look">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[6]} />
            }
          />
        </Route>
        <Route path="/terra">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[7]} />
            }
          />
        </Route>
        <Route path="/urban">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[8]} />
            }
          />
        </Route>
        <Route path="/rocca">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[9]} />
            }
          />
        </Route>
        <Route path="/vintage">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[10]} />
            }
          />
        </Route>
        <Route path="/alucobond-legno">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[11]} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default ColoursAndSurfacesRoutes;
