import React from "react";

const Sections = ({ image, title }) => {
  return (
    <>
      <div className="image-section">
        <img src={image}></img>
      </div>
      <h1 className="primary-headline">{title}</h1>
    </>
  );
};

export default Sections;
