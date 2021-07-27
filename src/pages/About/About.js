import React from "react";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import "./AboutStyles.scss";
import spotlight from "../../assets/images/spotlight2.png";
import Footer from "../../components/Footer/Footer";

function About(props) {
  return (
    <div id="about">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />

      <div className="about-contents-wrapper">
        <div className="about-header">
          <h1>
            At Biscuits n Groovy, our mission is simple: Create a more
            intentional and equitable music experience
          </h1>
        </div>
        <div className="about-contents-1">
          <p>
            We partner with artists to debut their new releases to their most
            devoted fans.
          </p>
          <p>
            By offering superfans a unique collector experience, we bring them
            closer to the artists they love. In return, we’re able to pay
            artists better, and give their music the lasting value it deserves.
          </p>
          <p>
            Two principles guide everything we do - make text bold/stand out in
            another color maybe
          </p>
          <ol className="ol-section">
            <li>Treat artists as creators rather than commodities</li>
            <li>
              Deliver fans the most intentional and powerful music experience
            </li>
          </ol>

          <p>
            Biscuits n Groovy cuts through the noise to amplify what matters:
            the connection between artists and fans. We’re building a music
            experience that goes beyond streaming, for those who believe in the
            power of fandom.
          </p>
        </div>
      </div>
      <h1>
        <div>OUR STORY</div>
        <div>
          <img src={spotlight} alt="spotlight" />
        </div>
      </h1>
      <div className="about-contents-wrapper">
        <div className="about-contents-2">
          <p>
            The idea for Biscuits n Groovy started with a shared love for music.
            More specifically, with our founders’ carefully-curated collection
            of vinyl records. While we love the convenience of digital
            streaming, there's a lot of things about the "old school" approach
            that streaming just can’t compete with. No, we don't mean the audio
            quality. It's about the <strong>experience.</strong>
          </p>
          <p>
            From admiring an album's cover art to carefully dropping the needle,
            everything about listening to a vinyl record is intentional. It
            gives you a chance to sit back and really hear the artist’s story,
            like reading a good book from beginning to end. Physical music
            provides a much needed reprieve from the shuffle-and-go mentality
            that underpins streaming services, and for that matter permeates so
            much of our hectic lives.​ We built our collection to appreciate and
            support our favorite artists in a more meaningful way, and we
            believe other true fans want to do the same.
          </p>
          <p>
            So we started thinking, how can we take modern-day streaming, and
            infuse it with some of the intentionality of vinyl collecting? And
            in doing so, we can help artists recapture some of the autonomy and
            identity that has been stripped away by the proliferation of their
            music.
          </p>
          <p>
            That's why we started Biscuits n Groovy. While we're not a record
            company, the "biscuits'' part of the name is an homage to our vinyl
            collection, the original inspiration. Just like the process of
            making and selecting records, everything we do at BnG is thoughtful,
            deliberate, and human.
          </p>
          <p>[needs the biscuit quote]</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
