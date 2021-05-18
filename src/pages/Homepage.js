import { React } from "react";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MusicShowcase from "../components/MusicShowcase/MusicShowcase";
import Footer from "../components/Footer/Footer";
import "./HomepageStyles.scss";
import FixedNavbarContainer from "../components/FixedNavbarContainer/FixedNavbarContainer";

function Homepage() {
  return (
    <div>
      <FixedNavbarContainer />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <Footer />
    </div>
  );
}

export default Homepage;
