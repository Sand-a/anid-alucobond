import React from "react";
import "./Modal.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import SwiperCaroussel from "../SwiperCaroussel/SwiperCaroussel";

const Modal = ({ open, onClose, projectImages }) => {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal-container"
        >
          <button onClick={onClose} className="closeBtn">
            <ion-icon name="close-outline"></ion-icon>
          </button>
          {/* <ImageSlider projectImages={projectImages} /> */}
          <SwiperCaroussel images={projectImages} />
        </div>
      </div>
    </>
  );
};

export default Modal;
