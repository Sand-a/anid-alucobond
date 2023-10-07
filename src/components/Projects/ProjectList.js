import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

import "./ProjectList.css";
import Modal from "../Modal/Modal";

const ProjectList = ({ data }) => {
  // const [openModal, setOpenModal] = useState(false);
  // const [openProject, setOpenProject] = useState("");

  // const openSlide = (project) => {
  //   setOpenProject(project);
  // };
  return (
    <>
      <ul className="cards__container">
        {data.map((project) => (
          <ProjectCard
            // open={() => {
            //   setOpenModal(true);
            //   document.body.style.overflow = "hidden";
            // }}
            // onClose={() => {
            //   setOpenModal(false);
            //   document.body.style.overflow = "auto";
            // }}
            // openSlide={openSlide}
            key={project.id}
            name={project.name}
            image={project.image_gallery}
            images={project.image}
            type={project.building_type}
            path={project.path}
            id={project._id}
            colourSurface={project.colour_surface}
            material={project.material}
            description={project.description}
            place={project.place}
            year={project.year}
          />
        ))}
      </ul>
      {/* <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          document.body.style.overflow = "auto";
        }}
        projectImages={openProject}
      /> */}
    </>
  );
};

export default ProjectList;
