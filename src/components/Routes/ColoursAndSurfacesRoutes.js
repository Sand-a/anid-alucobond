import React from "react";
import { Routes, Route } from "react-router-dom";
import ColoursAndSurfacesSubPage from "../pages/ColoursAndSurfacesSubPage";
import ColoursAndSurfacesPage from "../pages/ColoursAndSurfacesPage";
import ColourPage from "../ColourPage/ColourPage";
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
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[0].colours} />}
          />
        </Route>

        <Route path="/solid">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[1]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[1].colours} />}
          />
        </Route>

        <Route path="/metallic">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[2]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[2].colours} />}
          />
        </Route>
        <Route path="/spectra">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[3]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[3].colours} />}
          />
        </Route>
        <Route path="/sparkling">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[4]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[4].colours} />}
          />
        </Route>
        <Route path="/natural">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[5]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[5].colours} />}
          />
        </Route>
        <Route path="/anodized-look">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[6]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[6].colours} />}
          />
        </Route>
        <Route path="/terra">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[7]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[7].colours} />}
          />
        </Route>
        <Route path="/urban">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[8]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[8].colours} />}
          />
        </Route>
        <Route path="/rocca">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[9]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[9].colours} />}
          />
        </Route>
        <Route path="/vintage">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[10]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[10].colours} />}
          />
        </Route>
        <Route path="/alucobond-legno">
          <Route
            index
            element={
              <ColoursAndSurfacesSubPage item={coloursSurfacesData[11]} />
            }
          />
          <Route
            path=":id"
            element={<ColourPage item={coloursSurfacesData[11].colours} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default ColoursAndSurfacesRoutes;
