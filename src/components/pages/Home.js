import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ANID &#124; ALUCOBOND&reg;</title>
        <meta
          name="description"
          content="ANID, exclusive distributor of ALUCOBOND® in Lebanon. We design, supply, manufacture & install. Provide best architectural solutions in the most efficient & effective way"
        />
        <link rel="canonical" href="" />
      </Helmet>
      <div className="home">
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
