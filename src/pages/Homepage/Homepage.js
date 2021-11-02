import ArtistReminder from "../../components/ArtistReminder/ArtistReminder";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import NFTBreakdown from "../../components/NFTBreakdown/NFTBreakdown";
import Hero from "../../components/Hero/Hero";
import "./HomepageStyles.scss";
import reminder_image from "../../assets/images/subscribe.webp";
import NewsletterFormContainer from "../../components/NewsLetterSubscribe/NewsletterFormContainer";

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
        signUpPopup={props.signUpPopup}
        showSignUpPopup={props.showSignUpPopup}
        releaseData={props.releaseData}
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
