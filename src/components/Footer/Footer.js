import React from "react";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";
import "./Footer.css";

const Footer = ({ dateUpdate }) => {
  return (
    <>
      <footer className="footer-container">
        <ul className="social-links">
          <li>
            <a href="tel:+9613299004" className="footer-link footer-link--name">
              <ion-icon name="call-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="mailto:info@anidconstruction.com" className="footer-link">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              href="https://www.google.co.uk/maps/place/ALUCOBOND-ANID/@33.8618125,35.2896406,11z/data=!4m10!1m2!2m1!1sanid+construction!3m6!1s0x151f17c4e84d1bc1:0x87a93d4ed5f68907!8m2!3d33.8618125!4d35.5533125!15sChFhbmlkIGNvbnN0cnVjdGlvbloTIhFhbmlkIGNvbnN0cnVjdGlvbpIBCmNvbnRyYWN0b3LgAQA!16s%2Fg%2F11c51z3_3l"
            >
              <ion-icon name="location-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/alucobondlebanon/?igshid=YmMyMTA2M2Y%3D"
              className="footer-link footer-link--name"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="footer-signature">
          <p className="copyright">
            Copyright&copy;
            <span className="year"> {new Date().getFullYear()} </span> ANID
            &#124; ALUCOBOND® &#124;{" "}
            <span className="uppercase">All rights reserved.</span>
          </p>

          <p className="copyright uppercase">
            Developed & Designed by Sandrine Anid
          </p>
        </div>
      </footer>
      <BackToTopBtn />
    </>
  );
};

export default Footer;
