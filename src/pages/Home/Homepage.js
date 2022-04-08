//styles
import "./HomepageStyles.scss";

//component imports
import HowItWorks from "../../common/components/HowItWorks/HowItWorks";
import MusicShowcase from "../../common/components/MusicShowcase/MusicShowcaseIndex";
import KnowYourCollection from "../../common/components/KnowYourCollection/KnowYourCollection";
import Hero from "../../common/components/Hero/Hero";
import AttentionSection from "../../common/components/AttentionSection/AttentionSection";
import FixedNavigationSpacer from "../../common/components/FixedNavigationSpacer/FixedNavigationSpacer";

//seo imports
import SEOHelmet from "../../common/utils/SEO/SEOHelmet";

const Homepage = () => {
  return (
    <>
      <SEOHelmet
        title="New Music Is Our Jam"
        content="Stream and collect exclusive biscuits from your favorite artists. Prove your fandom"
      />
      <FixedNavigationSpacer />
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <KnowYourCollection />
      <AttentionSection />
    </>
  );
};

export default Homepage;
