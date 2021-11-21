import ArtistReminder from "../../components/ArtistReminder/ArtistReminder";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import NFTBreakdown from "../../components/NFTBreakdown/NFTBreakdown";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import Hero from "../../components/Hero/Hero";
import "./HomepageStyles.scss";

import reminder_image from "../../assets/images/subscribe.webp";
import NewsletterFormContainer from "../../components/Subscribe/NewsLetterFormContainer";

function Homepage(props) {
  return (
    <section>
      <Hero
        loginPopup={props.loginPopup}
        signUpPopup={props.signUpPopup}
        showLoginPopup={props.showLoginPopup}
        showSignUpPopup={props.showSignUpPopup}
        showMobileNav={props.showMobileNav}
        setShowMobileNav={props.setShowMobileNav}
      />
      <HowItWorks />

      <MusicShowcase
        //passing in to component for if user is not logged in and tries to purchase a release - sign up popup shows
        signUpPopup={props.signUpPopup}
        showSignUpPopup={props.showSignUpPopup}
        /////////////////////////////////////////
        // releasePop={releasePop}
        // showReleasePopUp={setReleasePop}
        stripeLoader={props.stripeLoader}
        setStripeLoader={props.setStripeLoader}
      />
      <NFTBreakdown />
      <div className="reminder-subscribe">
        <div className="reminder-subscribe-wrapper">
          <ArtistReminder />
          <NewsletterFormContainer />
        </div>

        <img className="reminder-image" src={reminder_image} alt="sfsfsf" />
      </div>
    </section>
  );
}

export default Homepage;
