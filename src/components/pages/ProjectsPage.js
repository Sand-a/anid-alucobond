import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import ProjectList from "../Projects/ProjectList";
import { projectsData } from "../Data/projectsData";
import "../../App.css";
import Sections from "../Sections/Sections";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";

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
      <section
        className="
      margin-top"
      >
        <Sections title={"Our Projects"} />
        <p className="container query-container margin-bottom-5 bodytext">
          Get Inspired. Discover the large number of projects that have already
          been completed and let yourself be inspired.
          <br></br>All type of project, from compagny headquarters building to
          private housing, cultural and educatif building such universities,
          hospital and hotels, residential buildings, shopping mall and public
          transport, as well as building corporate identity design for multiple
          brand...
        </p>
        <SearchBox searchChange={onSearchChange} />

        <ProjectList data={filteredProjects} />
        <BackToTopBtn />
      </section>
    </>
  );
};

export default ProjectsPage;
