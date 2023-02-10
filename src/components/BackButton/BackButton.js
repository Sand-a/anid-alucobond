import React from "react";
import "./BackButton.css";
import { Link } from "react-router-dom";

export default function BackButton({ pageLink }) {
  return (
    <>
      <button className="no-style-button">
        <Link to={pageLink} className="btn go-back-btn">
          &larr; Go Back
        </Link>
      </button>
    </>
  );
}
