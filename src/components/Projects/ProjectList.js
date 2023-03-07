import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../Data/projectsData";
import "./ProjectList.css";

const ProjectList = ({ data }) => {
  return (
    <ul className="cards__container">
      {data.map((project) => (
        <ProjectCard
          key={project._id}
          name={project.name}
          image={project.image[0]}
          path={project.path}
          id={project._id}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
