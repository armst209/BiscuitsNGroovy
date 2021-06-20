import { React, useState } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import ReminderSection from "../../components/ReminderSection/ReminderSection";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import Footer from "../../components/Footer/Footer";
import "./HomepageStyles.scss";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";

function Homepage(props) {
  console.log(props);
  return (
    <div>
      <Navbar showLoginPopup={props.setTrigger} />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <ReminderSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default Homepage;
