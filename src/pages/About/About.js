import React from "react";

import "./AboutStyles.scss";
import about_main_img from "../../assets/images/about_story.webp";
import bucket_hat from "../../assets/images/buckethats.webp";
import disc_img from "../../assets/images/compact-disc-yellow.svg";
import two_icon from "../../assets/images/hand2_yellow.svg";
import one_icon from "../../assets/images/hand1_yellow.svg";

import record_vinyl from "../../assets/images/compact-disc-yellow.svg";

function About() {
  return (
    <section id="about">
      <div className="about-title">
        <h1>
          <img width="50px" src={record_vinyl} alt="record" />
          <div>ABOUT</div>
        </h1>
      </div>
      <div className="about-contents-wrapper">
        <div className="about-header">
          <h1>
            At Biscuits n Groovy, our mission is simple: <br /> Create a more{" "}
            <span>intentional</span> and <span> equitable</span> music
            experience
          </h1>
        </div>
        <div className="about-contents-1">
          <div className="contents-img-wrapper">
            <div className="contents-img">
              <img src={bucket_hat} alt="bucket hat" />
            </div>
            <img src={disc_img} alt="disc" className="disc_image" />
          </div>

          <div className="contents-1-text">
            {" "}
            <p>
              We partner with artists to debut exclusive music and album art to
              their most devoted fans.
            </p>
            <p>
              By offering superfans a unique collector experience, we bring them
              closer to the artists they love. In return, we’re able to pay
              artists better and give their music the lasting value it deserves.
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
                  Treat artists as creators rather than commodities
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
            <p>
              Biscuits n Groovy cuts through the noise to amplify what matters:
              the connection between artists and fans. We’re building a music
              experience that goes beyond streaming, for those who believe in
              the power of fandom.
            </p>
          </div>
        </div>
      </div>
      <h1 className="story-h1">
        <img width="50px" src={record_vinyl} alt="record" />
        <div>OUR STORY</div>{" "}
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
                    manufacturing, the puck-shaped disc that gets pressed into a
                    record is called “the biscuit”
                  </div>
                </div>
                <img src={disc_img} alt="disc" className="disc_image" />
              </div>
              The idea for Biscuits n Groovy started with a shared love for
              music. More specifically, with our co-founders Matt & Alison’s
              carefully-curated collection of vinyl records. While we love the
              convenience of digital streaming, there's a lot of things about
              the "old school" approach that streaming just can’t compete with.
              No, we don't mean the audio quality. It's about the{" "}
              <strong>experience.</strong>
              <br />
              <br />
              From admiring an album's cover art to carefully dropping the
              needle, everything about listening to a vinyl record is
              intentional. It gives you a chance to sit back and really hear the
              artist’s story, like reading a good book from beginning to end.
              Physical music provides a much needed reprieve from the
              shuffle-and-go mentality that underpins streaming services, and
              for that matter permeates so much of our hectic lives.​ We built
              our collection to appreciate and support our favorite artists in a
              more meaningful way, and we believe other true fans want to do the
              same.
              <br />
              <br />
              So we started thinking, how can we take modern-day streaming, and
              infuse it with some of the intentionality of vinyl collecting? And
              in doing so, we can help artists recapture some of the autonomy
              and identity that has been stripped away by the proliferation of
              their music.
              <br />
              <br />
              That's why we started Biscuits n Groovy. While we're not a record
              company, the "biscuits'' part of the name is an homage to our
              vinyl collection, the original inspiration. Just like the process
              of making and selecting records, everything we do at BnG is
              thoughtful, deliberate, and human.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
