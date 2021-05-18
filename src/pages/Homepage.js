import React from "react";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MusicShowcase from "../components/MusicShowcase/MusicShowcase";
import Navbar from "../components/Navbar/Navbar";

function Homepage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <HowItWorks />
      <MusicShowcase />
    </div>
  );
}

export default Homepage;
