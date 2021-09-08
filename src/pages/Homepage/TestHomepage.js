import React, { useState } from "react";
import ArtistReminder from "../../components/ArtistReminder/ArtistReminder";
import Footer from "../../components/Footer/Footer";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import NotHomeNavigation from "../../components/Navbars/NotHomeNavigation/NotHomeNavigation";
import NFTBreakdown from "../../components/NFTBreakdown/NFTBreakdown";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import TestHero from "./TestHero";
import "./TestHomepageStyles.scss";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";

function TestHomepage(
  props,
  {
    loginPopup,
    showLoginPopup,
    showSignUpPopup,
    signUpPopup,
    setShowMobileNav,
    showMobileNav,
  }
) {
  const [releasePop, setReleasePop] = useState("");
  const [stripeLoader, setStripeLoaoder] = useState("");
  return (
    <>
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <TestHero
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <HowItWorks />
      <MusicShowcase
        //passing in to component for if user is not logged in and tries to purchase a release - sign up popup shows
        signUpPopup={props.signUpPopup}
        showSignUpPopup={props.showSignUpPopup}
        /////////////////////////////////////////
        showReleasePopUp={setReleasePop}
        stripeLoader={stripeLoader}
        setStripeLoader={setStripeLoaoder}
      />
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
          <ArtistReminder />
          <SubscribeSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TestHomepage;
