import { React } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import Footer from "../../components/Footer/Footer";
import "./HomepageStyles.scss";
import HomepageNavbar from "../../components/Navbars/Homepage/HomepageNavbar";
import ReminderSection from "../../components/ReminderSection/ReminderSection";

function Homepage() {
  return (
    <div>
      <HomepageNavbar />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <ReminderSection />
      <Footer />
    </div>
  );
}

export default Homepage;
