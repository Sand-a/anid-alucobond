import React from "react";

const Sections = ({ image, title }) => {
  return (
    <>
      <div className="image-section">
        <img src={image}></img>
      </div>
      <h1 className="primary-headline">{title}</h1>
      {/* <p>
        ANID in Lebanon, is the exclusive distributor of ALUCOBOND®, the
        original ACP, Aluminium Composite Panel, made in germany. From
        Inspiration to assembly, our goal is to provide the best architectural
        solutions in the most efficient and effective way.
      </p> */}
    </>
  );
};

export default Sections;
