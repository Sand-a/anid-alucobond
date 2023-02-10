import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, image, id, path }) => {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={path}>
        <figure className="cards__item__pic-wrap">
          <img src={image} alt="Facade" className="cards__item__img" />
        </figure>
        <div className="project--info">
          <h1 className="project--title">{name}</h1>
          <p className="poject--materiel">Anodice Look</p>
          <p className="project--description">Perforation</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
