//styles
import "./AboutStyles.scss";

//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

//img imports
import about_main_img from "../../assets/images/about_story.webp";
import bucket_hat from "../../assets/images/buckethats.webp";
import disc_img from "../../assets/images/compact-disc-yellow.svg";
import two_icon from "../../assets/images/hand2_yellow.svg";
import one_icon from "../../assets/images/hand1_yellow.svg";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";

//component imports
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

const About = () => {
  const [fansInformation, setFansInformation] = useState("");
  const [artistsInformation, setArtistsInformation] = useState("");

  const showHideFansInformationHandler = () =>
    setFansInformation(!fansInformation);

  const hideFansInformationHandler = () => {
    setFansInformation(false);
  };

  const showHideArtistsInformationHandler = () =>
    setArtistsInformation(!artistsInformation);

  const hideArtistsInformationHandler = () => {
    setArtistsInformation(false);
  };

  return (
    <>
      <FixedNavigationSpacer />
      <section id="about">
        <div className="about-title">
          <h1>
            <RecordVinyl width="50px" />
            <div>ABOUT</div>
          </h1>
        </div>
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
                <img src={bucket_hat} alt="bucket hats" />
              </div>
              <img src={disc_img} alt="disc" className="disc_image" />
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
                    <img src={one_icon} alt="hand icon" />
                  </div>
                  <div className="principle-text">
                    Empower trailblazing artists
                  </div>
                </div>
                <div className="principle">
                  <div className="principle-img">
                    <img src={two_icon} alt="hand icon" />
                  </div>
                  <div className="principle-text">
                    Recognize and reward true fandom
                  </div>
                </div>
              </div>
              <div className="artist-fans-serve-main-wrapper ">
                <div className="artists-fans-serve-container">
                  <div className="artists-fans-serve-header">
                    <h1>How We Serve:</h1>
                    <div className="artists-fans-serve-button-container">
                      <button
                        onClick={() => {
                          showHideFansInformationHandler();
                          hideArtistsInformationHandler();
                        }}
                        className="_button"
                      >
                        Fans
                      </button>
                      <button
                        onClick={() => {
                          showHideArtistsInformationHandler();
                          hideFansInformationHandler();
                        }}
                        className="_button"
                      >
                        Artists
                      </button>
                    </div>
                  </div>
                  {fansInformation && (
                    <ul>
                      <li>
                        Biscuits n Groovy offers music fans a revolutionary
                        collector experience. With our biscuits, fans can
                        finally prove they were one of the FIRST to hear new
                        music. By directly supporting the artists they love,
                        fans can become part of their story.
                      </li>
                      <li>
                        Your music taste is part of your identity. Biscuits n
                        Groovy lets you build a collection that’s uniquely
                        yours, so you can show it off to the world and
                        confidently say “I own this.” Plus if your favorite
                        artist blows up, you can finally PROVE you were an
                        original fan.
                      </li>
                    </ul>
                  )}
                  {artistsInformation && (
                    <ul>
                      <li>
                        Biscuits n Groovy helps artists earn more for their
                        recorded music. Each biscuit is a blank canvas to share
                        unique content with their superfans and bring them
                        closer together. We’re committed to treating our artists
                        right and empowering them to grow and thrive where other
                        music platforms can’t
                      </li>
                      <li>
                        <div>Why release with BnG?</div>
                        <ol>
                          <li>Make more money</li>
                          <li>Connect with your top fans</li>
                          <li>Stand out from the crowd</li>
                        </ol>
                        <div className="read-more-container">
                          Read more <Link to="/artists">here</Link>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="story-h1">
          <div>OUR STORY</div> <RecordVinyl width="50px" />
        </h1>
        <div className="about-contents-wrapper">
          <div className="about-contents-2">
            <div className="contents-2-text">
              <div className="contents-2-wrapper">
                <div className="contents-img-wrapper">
                  <div className="contents-img">
                    <img src={about_main_img} alt="about-main" />
                    <div className="bng-caption">
                      Some favorites from our co-founders’ collection. In vinyl
                      manufacturing, the puck-shaped disc that gets pressed into
                      a record is called “the biscuit”
                    </div>
                  </div>
                  <img src={disc_img} alt="disc" className="disc_image" />
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
    </>
  );
};

export default About;
