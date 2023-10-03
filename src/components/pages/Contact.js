import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm/ContactForm";
import SectionReveal from "../SectionReveal/SectionReveal";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>ANID &#124; ALUCOBOND&reg; - Contact</title>
        <meta
          name="description"
          content="ANID Building - Mkalless Industrial Zone - 
                          Lebanon. Call: +961(3)299005
       "
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <section className="section-contact padding-top-bottom query-container">
        <div className="headline-container margin-bottom-10">
          <h1 className="headline headline-s ">
            Contact Us<strong>.</strong>
          </h1>
          <p className="border-line border-line-black margin-bottom-more"></p>
        </div>
        <SectionReveal
          section={
            <div className="grid grid--2-cols container ">
              <div className="form-container">
                <ContactForm />
              </div>
              <div className="address-container ">
                <h1 className="headline headline-s ">
                  <span className="margin-left"> ANID</span>
                  <span className="headline-light-big"> | </span> ALUCOBOND
                  <span className="headline-light-big">®</span>
                  <span className="headline-light"> Lebanon</span>
                </h1>
                <ul className="contact-list ">
                  <li className="contact-items ">
                    <a
                      target="_blank"
                      className="contact-link"
                      href="https://www.google.co.uk/maps/place/ALUCOBOND-ANID/@33.8618125,35.2896406,11z/data=!4m10!1m2!2m1!1sanid+construction!3m6!1s0x151f17c4e84d1bc1:0x87a93d4ed5f68907!8m2!3d33.8618125!4d35.5533125!15sChFhbmlkIGNvbnN0cnVjdGlvbloTIhFhbmlkIGNvbnN0cnVjdGlvbpIBCmNvbnRyYWN0b3LgAQA!16s%2Fg%2F11c51z3_3l"
                    >
                      <ion-icon name="location-outline"></ion-icon>
                      <div className="contact-item">
                        <p>
                          ANID Building . Mkalless . <br></br>Industrial Zone .
                          Lebanon
                        </p>
                        <p className="pobox">P.O.Box : 70 - 243 Antelias</p>
                      </div>
                    </a>
                  </li>

                  <li className="contact-items">
                    <a className="contact-link" href="tel:+9613299005">
                      <ion-icon name="call-outline"></ion-icon>
                      <p className="contact-item">+961 (1) 684 111</p>
                    </a>
                  </li>
                  <li className="contact-items">
                    <a className="contact-link" href="tel:+9613299005">
                      <ion-icon name="phone-portrait-outline"></ion-icon>
                      <p className="contact-item">+961 (3) 299 004</p>
                    </a>
                  </li>
                  <li className="contact-items">
                    <a
                      href="mailto:contact@anidconstruction.com"
                      className="contact-link"
                    >
                      <ion-icon name="mail-outline"></ion-icon>
                      <p className="contact-item">info@anidconstruction.com</p>
                    </a>
                  </li>
                  <li className="contact-items">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/alucobondlebanon/?igshid=YmMyMTA2M2Y%3D"
                      className="contact-link"
                    >
                      <ion-icon name="logo-instagram"></ion-icon>
                      <p className="contact-item contact-item-insta">
                        alucobondlebanon
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </section>
    </>
  );
}

export default Contact;
