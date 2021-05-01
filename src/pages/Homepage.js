import React from "react";

import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MusicShowcase from "../components/MusicShowcase";
import ReminderSection from "../components/ReminderSection";

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
