import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  name,
  image,
  images,
  // open,
  // openSlide,
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
      <Link to={path} className="cards__item__link">
        <figure
          // onClick={() => {
          //   open();
          //   openSlide(images);
          // }}
          className="cards__item__pic-wrap"
        >
          <img src={image} alt="Facade" className="cards__item__img" />
          <div className="project-name">
            <h1 className="headline headline-s ">
              {name}
              <stron>.</stron>
            </h1>
            <p className="bodytext ">{place}</p>
          </div>
        </figure>
      </Link>
    </li>
  );
};

export default ProjectCard;
