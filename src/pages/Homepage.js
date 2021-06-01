import { React } from "react";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MusicShowcase from "../components/MusicShowcase/MusicShowcase";
import Footer from "../components/Footer/Footer";
import "./HomepageStyles.scss";
// import FixedNavbarContainer from "../components/FixedNavbarContainer/FixedNavbarContainer";
import Navbar from "../components/Navbar/Navbar";
import ReminderSection from "../components/ReminderSection/ReminderSection";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <ReminderSection />
      <Footer />
    </div>
  );
}

export default Homepage;
