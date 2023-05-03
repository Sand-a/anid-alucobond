import React from "react";
import "./ProjectsCategoryCard.css";

const ProjectsCategoryCard = ({ image }) => {
  return (
    <div className="project__category--card">
      <img src={image} alt="" />
    </div>
  );
};

export default ProjectsCategoryCard;
