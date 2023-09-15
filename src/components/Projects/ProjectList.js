import React from "react";
import ProjectCard from "./ProjectCard";

import "./ProjectList.css";

const ProjectList = ({ data }) => {
  return (
    <ul className="cards__container">
      {data.map((project) => (
        <ProjectCard
          key={project._id}
          name={project.name}
          image={project.image[0]}
          type={project.building_type}
          // path={project.path}
          id={project._id}
          colourSurface={project.colour_surface}
          material={project.material}
          description={project.description}
          place={project.place}
          year={project.year}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
