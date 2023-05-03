import React, { useState } from "react";
import SearchBox from "../Projects/SearchBox";
import ProjectList from "../Projects/ProjectList";
import { projectsData } from "../Data/projectsData";
import "../../App.css";

const ProjectsPage = () => {
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <>
      <section className="margin-top">
        <h1 className="primary-headline">ALL Projects</h1>
        <SearchBox searchChange={onSearchChange} />
        <ProjectList data={filteredProjects} />
      </section>
    </>
  );
};

export default ProjectsPage;
