import React from "react";
import { Link } from "react-router-dom";
import "./ZPattern.css";
import { useInView } from "react-intersection-observer";

const ZPattern = ({
  imageSrc,
  imageAlt,
  title,
  bodytext,
  link,
  path,
  flipped,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <div className="z-pattern__img-box ">
            <img className="z-pattern__img" src={imageSrc} alt={imageAlt} />
          </div>
          <div className="z-pattern__content z-pattern__content-right">
            <h1 className="headline headline-s ">{title}</h1>
            <p className="border-line border-line-black"></p>
            <p className="bodytext display-linebreak">{bodytext}</p>
            <Link className="btn btn-more" to={path}>
              {link}
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="z-pattern__content z-pattern__content-left">
            <h1 className="headline headline-s">{title}</h1>
            <p className="border-line border-line-black"></p>
            <p className="bodytext display-linebreak">{bodytext}</p>
            <Link className="btn btn-more" to={path}>
              {link}
            </Link>
          </div>
          <div className="z-pattern__img-box ">
            <img className="z-pattern__img" src={imageSrc} alt={imageAlt} />
          </div>
        </>
      );
    }
  };
  return (
    <div
      ref={ref}
      className={`container ${
        inView ? "z-pattern z-pattern--zoom" : "z-pattern"
      }`}
    >
      {renderContent()}
    </div>
  );
};

export default ZPattern;
