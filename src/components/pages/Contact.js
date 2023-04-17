import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <section className="margin-top section-contact">
      <h1 className="primary-headline">Contact Us</h1>

      <ContactForm />
    </section>
  );
}

export default Contact;
