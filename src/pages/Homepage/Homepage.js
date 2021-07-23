import { React } from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import ReminderSection from "../../components/ReminderSection/ReminderSection";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import Footer from "../../components/Footer/Footer";
import "./HomepageStyles.scss";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import NFTBreakdown from "../../components/NFTBreakdown/NFTBreakdown";

function Homepage(props) {
  return (
    <div>
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />

      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <NFTBreakdown />
      <div className="reminder-subscribe">
        <div className="reminder-subscribe-wrapper">
          <ReminderSection />
          <SubscribeSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
