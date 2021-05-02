import React from "react";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MusicShowcase from "../components/MusicShowcase/MusicShowcase";
import ReminderSection from "../components/ReminderSection/ReminderSection";

function Homepage() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <ReminderSection />
    </div>
  );
}

export default Homepage;
