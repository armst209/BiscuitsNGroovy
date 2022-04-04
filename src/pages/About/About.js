
//styles
import "./AboutStyles.scss";

//img imports
import about_main_img from "../../assets/images/about_story.webp";
import bucket_hat from "../../assets/images/buckethats.webp";
import { ReactComponent as DiscImage } from "../../assets/images/compact-disc-yellow.svg";
import { ReactComponent as TwoIcon } from "../../assets/images/hand2_yellow.svg";
import { ReactComponent as OneIcon } from "../../assets/images/hand1_yellow.svg";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";

//component imports
import HowWeServeSection from "./HowWeServeSection/HowWeServeSection";
import Title from "../../UI/Title/Title";

//seo imports
import SEOHelmet from "../../utils/SEO/SEOHelmet";


const About = () => {

  return (

    <section id="about" className="_main_section">
      <SEOHelmet title="About" content="Biscuits n Groovy exists to create a more engaging and equitable digital music experience" />
      <Title title={"about"} />
      <div className="about-contents-wrapper">
        <div className="about-header">
          <h1>
            Biscuits n Groovy exists to create a more <span>engaging</span>{" "}
            and <span>equitable </span>digital music experience
          </h1>
        </div>
        <div className="about-contents-1">
          <div className="contents-img-wrapper">
            <div className="contents-img">
              <img src={bucket_hat} width="auto" height="auto" loading="eager" alt="Biscuit n Groovy Bucket Hats" title="Founders Matt & Allison wearing Biscuit n Groovy bucket hats" />
            </div>
            <DiscImage className="disc_image" />
          </div>

          <div className="contents-1-text">
            <p>
              We partner with artists to debut exclusive music and album art
              to their most devoted fans.
            </p>
            <p>
              By offering superfans a unique collector experience, we bring
              them closer to the artists they love. In return, we’re able to
              pay artists better and give their music the lasting value it
              deserves.
            </p>
            <div className="principle-section">
              <p className="two-principles">
                Two principles guide everything we do:
              </p>
              <div className="principle">
                <div className="principle-img">
                  <OneIcon alt="hand icon" />
                </div>
                <div className="principle-text">
                  Empower trailblazing artists
                </div>
              </div>
              <div className="principle">
                <div className="principle-img">
                  <TwoIcon alt="hand icon" />
                </div>
                <div className="principle-text">
                  Recognize and reward true fandom
                </div>
              </div>
            </div>
            <HowWeServeSection />
          </div>
        </div>
      </div>
      <h1 className="story-h1">
        <div>OUR STORY</div>
        <RecordVinyl width="50px" />
      </h1>
      <div className="about-contents-wrapper">
        <div className="about-contents-2">
          <div className="contents-2-text">
            <div className="contents-2-wrapper">
              <div className="contents-img-wrapper">
                <div className="contents-img">
                  <img src={about_main_img} width="auto" height="auto" loading="lazy" alt="Co-Founder's Collection" title="Favorite vinyl from our co-founders’ collection" />
                  <div className="bng-caption">
                    Some favorites from our co-founders’ collection. In vinyl
                    manufacturing, the puck-shaped disc that gets pressed into
                    a record is called “the biscuit”
                  </div>
                </div>
                <DiscImage className="disc_image" />
              </div>
              The idea for Biscuits n Groovy started with a shared love for
              music. More specifically, with our co-founders Matt & Alison’s
              carefully-curated collection of vinyl records. While we love the
              convenience of digital streaming, there's a lot of things about
              the "old school" approach that streaming just can’t compete
              with. No, we don't mean the audio quality. It's about the{" "}
              <strong>experience.</strong>
              <br />
              <br />
              From admiring an album's cover art to carefully dropping the
              needle, everything about listening to a vinyl record is
              intentional. It gives you a chance to sit back and really hear
              the artist’s story, like reading a good book from beginning to
              end. Physical music provides a much needed reprieve from the
              shuffle-and-go mentality that underpins streaming services, and
              for that matter permeates so much of our hectic lives.​ We built
              our collection to appreciate and support our favorite artists in
              a more meaningful way, and we believe other true fans want to do
              the same.
              <br />
              <br />
              So we started thinking, how can we take modern-day streaming,
              and infuse it with some of the intentionality of vinyl
              collecting? And in doing so, we can help artists recapture some
              of the autonomy and identity that has been stripped away by the
              proliferation of their music.
              <br />
              <br />
              That's why we started Biscuits n Groovy. While we're not a
              record company, the "biscuits'' part of the name is an homage to
              our vinyl collection, the original inspiration. Just like the
              process of making and selecting records, everything we do at BnG
              is thoughtful, deliberate, and human.
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
