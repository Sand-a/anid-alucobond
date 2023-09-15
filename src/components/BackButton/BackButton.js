import React from "react";
import "./BackButton.css";
import { Link } from "react-router-dom";

export default function BackButton({ pageLink, name }) {
  return (
    <>
      <button className="no-style-button">
        <Link to={pageLink} className="btn  btn-click go-back-btn">
          &larr; Back to <span className="name">{name}</span>
        </Link>
      </button>
    </>
  );
}
