import React, { useRef } from "react";

import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = () => {};
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <h1 className="headline headline-s">We'd like to hear from you!</h1>
        <p className="bodytext">
          Send us our requirements so we can discuss your project.
        </p>
        <input
          className="searchfield"
          type="text"
          placeholder="Full Name*"
          name="user_name"
          required
        />
        <input
          className="searchfield"
          type="email"
          placeholder="Email*"
          name="user_email"
          required
        />
        <input
          className="searchfield"
          type="number"
          placeholder="Phone*"
          name="user_phone"
          required
        />
        <input
          className="searchfield"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          name="message"
          placeholder="Your Requiery..."
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" className="btn btn-click btn-black">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
