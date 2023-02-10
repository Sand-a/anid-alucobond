import React from "react";
import SearchBox from "../Projects/SearchBox";
import ProjectList from "../Projects/ProjectList";
import "../../App.css";

const ProjectsPage = () => {
  return (
    <>
      <section className="margin-top section-contact">
        <h1 className="primary-headline">ALL Projects</h1>
        <SearchBox />
        <ProjectList />
      </section>
    </>
  );
};

export default ProjectsPage;
