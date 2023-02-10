import React from "react";
import { useParams } from "react-router";
import { projectsData } from "../Data/projectsData";
import "../../App.css";
import "../ImageSlider/ImageSlider.css";

import ImageSlider from "../ImageSlider/ImageSlider";

export function ProjectPage() {
  const { id } = useParams();
  return (
    <>
      <section className=" section-project ">
        <ImageSlider projectImages={projectsData[id - 1].image} />
      </section>
    </>
  );
}

export default ProjectPage;
