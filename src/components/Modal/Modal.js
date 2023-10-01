import React from "react";
import "./Modal.css";

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
          <button onClick={onClose} className="closeBtn closeBtn-white">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <SwiperCaroussel images={projectImages} />
        </div>
      </div>
    </>
  );
};

export default Modal;
