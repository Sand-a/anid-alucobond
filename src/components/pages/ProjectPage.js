import React from "react";
import { useParams } from "react-router-dom";
import SwiperCaroussel from "../SwiperCaroussel/SwiperCaroussel";
import { projectsData } from "../Data/projectsData";

import Sections from "../Sections/Sections";

const ProjectPage = () => {
  const { projectId } = useParams();
  const selectedProject = projectsData.find(
    (project) => project.id === projectId
  );

  return (
    <>
      <section>
        <div className="project-page-title">
          <Sections title={"Our Projects"} />
        </div>
        <SwiperCaroussel images={selectedProject.image} />

        <div
          className="container query-container
        "
        >
          <h1 className="project--name">
            {" "}
            {selectedProject.name}
            <strong>.</strong>
          </h1>
          <p className="border-line border-line-black border-line-project--info"></p>

          {/* <ul className=" project--info">
            <li className="building">
              <span>Building Type</span>
              {selectedProject.building_type}
            </li>
            <li className="location">
              <span>Location / country</span>
              {selectedProject.place}
            </li>
            <li className="material">
              <span>material</span>
              {selectedProject.material}
            </li>
            <li className="architect">
              <span>architect / planner</span>
              {selectedProject.architect_planner}
            </li>
            <li className="surface display-linebreak ">
              <span>Colour surface</span>
              <span className="line-height-short">
                {selectedProject.colour_surface}
              </span>
            </li>
            <li className="colour display-linebreak">
              <span>Colour</span>
              <span className="line-height-short">
                {selectedProject.colour}
              </span>
            </li>
            <li className="owner">
              <span>Building Owner</span>
              {selectedProject.building_owner}
            </li>
            <li className="year">
              <span>Year</span>
              {selectedProject.year}
            </li>
            <li className="photos">
              <span>pictures</span>
              {selectedProject.photos}
            </li>
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
