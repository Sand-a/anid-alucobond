import React from "react";
import { useEffect, useState } from "react";
import "./BackToTopBtn.css";

const BackToTopBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // si on ve pa voir la navbar on pe faire top:90
  //  et si on pe que va vient direct le top on pe faire behavior:auto

  return (
    <div>
      {/* tenery operator who is reponsible to displaying our  btn  */}
      {backToTopBtn && (
        <button className="to-top-btn" onClick={scrollUp}>
          <ion-icon name="chevron-up-outline"></ion-icon>
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
