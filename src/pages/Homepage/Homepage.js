import { React } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import ArtistReminderSection from "../../components/ArtistReminder/ArtistReminder";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import Footer from "../../components/Footer/Footer";
import "./HomepageStyles.scss";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import NFTBreakdown from "../../components/NFTBreakdown/NFTBreakdown";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";

function Homepage(props) {
  return (
    <div>
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />

      <Hero />
      <HowItWorks />
      <MusicShowcase showSignUpPopUp={props.showSignUp} />
      <NFTBreakdown />
      <div className="reminder-subscribe">
        <img
          className="spotlight-top-left"
          src={spotlight_yellow_left}
          alt="spotlight icon"
        />
        <img
          className="spotlight-top-right"
          src={spotlight_yellow_right}
          alt="spotlight icon"
        />
        <div className="reminder-subscribe-wrapper">
          <ArtistReminderSection />
          <SubscribeSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
