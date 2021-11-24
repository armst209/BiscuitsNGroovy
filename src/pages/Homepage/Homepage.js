import "./HomepageStyles.scss";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcase";
import KnowYourCollection from "../../components/KnowYourCollection/KnowYourCollection";
import Hero from "../../components/Hero/Hero";
import AttentionSection from "../../components/AttentionSection/AttentionSection";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

function Homepage() {
  return (
    <>
      <FixedNavigationSpacer />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <KnowYourCollection />
      <AttentionSection />
    </>
  );
}

export default Homepage;
