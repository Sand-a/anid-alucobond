import React from "react";
import "./ImageSlider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <ion-icon
        name={
          direction === "next"
            ? "chevron-forward-outline"
            : "chevron-back-outline"
        }
      ></ion-icon>
    </button>
  );
}
