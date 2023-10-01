import React from "react";
import "../../App.css";

import OurServices from "../OurServices/OurServices";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet>
        <title>ANID &#124; ALUCOBOND&reg; - Services</title>
        <meta
          name="description"
          content="ANID, ALUCOBOND® Lebanon. We design, supply, manufacture & install. Our goal is to provide the best architectural solutions in the most efficient and effective way.
       "
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      <section>
        <OurServices />
      </section>
    </>
  );
}

export default Services;
