//styles
import "./HomepageStyles.scss";

//component imports
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import MusicShowcase from "../../components/MusicShowcase/MusicShowcaseIndex.section";
import KnowYourCollection from "../../components/KnowYourCollection/KnowYourCollection";
import Hero from "../../components/Hero/Hero";
import AttentionSection from "../../components/AttentionSection/AttentionSection";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

//seo imports
import SEOHelmet from "../../utils/SEO/SEOHelmet";




const Homepage = () => {
  return (
    <>
      <SEOHelmet title="Home" content="" />
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
