import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = () => {};
  return (
    <>
      <div className="wrap-address">
        <h1>ANID | ALUCOBOND® Lebanon</h1>
        <ul className="contact-list grid--2-cols">
          <li className="contact-items grid--2-cols--1">
            <a
              target="_blank"
              className="contact-link"
              href="https://www.google.co.uk/maps/place/ALUCOBOND-ANID/@33.8618125,35.2896406,11z/data=!4m10!1m2!2m1!1sanid+construction!3m6!1s0x151f17c4e84d1bc1:0x87a93d4ed5f68907!8m2!3d33.8618125!4d35.5533125!15sChFhbmlkIGNvbnN0cnVjdGlvbloTIhFhbmlkIGNvbnN0cnVjdGlvbpIBCmNvbnRyYWN0b3LgAQA!16s%2Fg%2F11c51z3_3l"
            >
              <ion-icon name="location-outline"></ion-icon>
            </a>

            <div className="contact-item">
              <p>ANID Building . Mkalles . Industrial Zone . Lebanon</p>
              <p className="pobox">P.O.Box: 70-243 Antelias</p>
            </div>
          </li>

          <li className="contact-items">
            <a className="contact-link" href="tel:+9613299005">
              <ion-icon name="call-outline"></ion-icon>
            </a>

            <p className="contact-item">+961 (1) 684 111</p>
          </li>
          <li className="contact-items">
            <a className="contact-link" href="tel:+9613299005">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </a>
            <p className="contact-item">+961 (3) 299 005</p>
          </li>
          <li className="contact-items">
            <a
              href="mailto:contact@anidconstruction.com"
              className="contact-link"
            >
              <ion-icon name="mail-outline"></ion-icon>
            </a>
            <p className="contact-item">contact@anidconstruction.com</p>
          </li>
          <li className="contact-items">
            <a
              target="_blank"
              href="https://www.instagram.com/alucobondlebanon/?igshid=YmMyMTA2M2Y%3D"
              className="contact-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <p className="contact-item">alucobondlebanon</p>
          </li>
        </ul>
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <h1> Send us your requirement:</h1>
          <input
            className="searchfield"
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input
            className="searchfield"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className="searchfield"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit" className="btn btn-form">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
