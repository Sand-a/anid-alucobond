import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  name,
  image,
  id,
  path,
  colourSurface,
  material,
  description,
  place,
  type,
  year,
}) => {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={path}>
        <figure className="cards__item__pic-wrap">
          <img src={image} alt="Facade" className="cards__item__img" />
          <div className="project-name">
            <h1 className="headline headline-s ">{name}</h1>
            <p className="bodytext ">{place}</p>
          </div>
        </figure>
        {/* <ul className="project--info">
          <li className="project--title">
            {name} <i className="project--type"> - {type}.</i>
          </li>
          <li className="poject--colour-surface">{colourSurface}</li>
          <li className="project--material">{material}</li>
          <li className="project--description">{description}</li>
          <li className="project--year">
            {place} - {year}
          </li>
        </ul> */}
      </Link>
    </li>
  );
};

export default ProjectCard;
