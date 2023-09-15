import React from "react";

const Sections = ({ title }) => {
  return (
    <>
      <div className="query-container headline-container">
        <h1 className="headline headline-s">
          {title}
          <strong>.</strong>
        </h1>
        <p className="border-line border-line-black"></p>
      </div>
    </>
  );
};

export default Sections;
