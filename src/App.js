import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import VideoFrame from "./components/pages/VideoFrame";
import ProjectsPage from "./components/pages/ProjectsPage";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import ColoursAndSurfacesRoutes from "./components/Routes/ColoursAndSurfacesRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { menuData } from "./components/Data/menuData";
import ProjectPage from "./components/pages/ProjectPage";

const App = () => {
  return (
    <>
      <Navbar navLinks={menuData} />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/defaultsite" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/colours-surfaces/*"
          element={<ColoursAndSurfacesRoutes />}
        />
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path=":projectId" element={<ProjectPage />} />
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/videos" element={<VideoFrame />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
