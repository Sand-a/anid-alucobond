import React from "react";
import "./Modal.css";
import Colour from "../Colour/Colour";

const ModalColour = ({ open, onClose, colour }) => {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal-colour-container"
        >
          <button onClick={onClose} className="closeBtn">
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <Colour colour={colour} />
        </div>
      </div>
    </>
  );
};

export default ModalColour;
