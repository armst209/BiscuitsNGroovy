import { React } from "react";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MusicShowcase from "../components/MusicShowcase/MusicShowcase";
import Footer from "../components/Footer/Footer";
import "./HomepageStyles.scss";
// import FixedNavbarContainer from "../components/FixedNavbarContainer/FixedNavbarContainer";
import HomepageNavbar from "../components/Navbar/HomepageNavbar";
import ReminderSection from "../components/ReminderSection/ReminderSection";

function Homepage() {
  return (
    <div>
      <HomepageNavbar onUpdate={() => window.scrollTo(0, 0)} />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <ReminderSection />
      <Footer />
    </div>
  );
}

export default Homepage;
