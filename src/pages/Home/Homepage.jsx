//styles
import style from "./Homepage.module.scss"

//component imports
import HowItWorks from "../../common/components/HowItWorks/HowItWorks";
import MusicShowcase from "../../common/components/MusicShowcase/index";
import KnowYourCollection from "../../common/components/KnowYourCollection/KnowYourCollection";
import Hero from "../../common/components/Hero/Hero";
import AttentionSection from "../../common/components/AttentionSection/AttentionSection";

//seo imports
import SEOHelmet from "../../common/utils/SEO/SEOHelmet";

const Homepage = () => {
  return (
    <>
    <h1 style={{color:"white"}}>Homepage</h1>
      {/* <SEOHelmet
        title="New Music Is Our Jam"
        content="Stream and collect exclusive biscuits from your favorite artists. Prove your fandom"
      /> */}
      {/* <Hero />
      <HowItWorks /> */}
      {/* <MusicShowcase /> */}
      {/* <KnowYourCollection />
      <AttentionSection /> */}
    </>
  );
};

export default Homepage;