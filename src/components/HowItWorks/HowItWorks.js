import { React, useState } from "react";
import "./HowItWorksStyles.scss";
import { Link } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
// import bgImage from "../../assets/images/small-slant.svg";
import loveSong from "../../assets/images/love-song2.svg";
import voice from "../../assets/images/voice.svg";
import collect from "../../assets/images/headphones2.svg";
import bottomWave from "../../assets/images/blackslant2.svg";
import light_upward from "../../assets/images/light_upward.svg";

function HowItWorks() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  return (
    <section id="how-it-works">
      <div className="how-it-works-container">
        <div className="box-title">
          <h1>HOW IT WORKS</h1>
        </div>
        <div className="boxes">
          <div className="box" onClick={() => setContent1(!content1)}>
            <div className="box-border">
              <div className="box-content">
                <div className="icon-headers">
                  <div className="headers">
                    <h4>NEW RELEASES</h4>
                    <h6>FOR TRUE FANS ONLY</h6>
                  </div>

                  <div className="how-icon">
                    <img src={loveSong} alt="love-icon" />
                  </div>
                </div>
                <div className="content">
                  {/* <img
                    className="light-upward"
                    src={light_upward}
                    alt="light"
                  /> */}
                  <div>
                    We partner with trendsetting artists to debut their new
                    music exclusively on Biscuits n Groovy. Show your loyalty
                    and support your favorite artists directly with each
                    purchase.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box" onClick={() => setContent2(!content2)}>
            <div className="box-border">
              <div className="box-content">
                <div className="icon-headers">
                  <div className="headers">
                    <h4>STREAM HERE</h4>
                    <h6>BEFORE THE OTHER GUYS</h6>
                  </div>
                  <div className="how-icon">
                    <img src={voice} alt="voice-icon" />
                  </div>
                </div>
                <div className="content">
                  <div>
                    We're not another unlimited subscription. Buy the music you
                    can't wait to hear, and stream with us before it drops
                    anywhere else. Get it while it’s hot, since it’s only on BnG
                    for a limited time.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box" onClick={() => setContent3(!content3)}>
            <div className="box-border">
              <div className="box-content">
                <div className="icon-headers">
                  <div className="headers">
                    <h4>COLLECT & SHARE</h4>
                    <h6> YOUR EXCLUSIVE RECORDS</h6>
                  </div>
                  <div className="how-icon">
                    <img src={collect} alt="collect-icon" />
                  </div>
                </div>

                <div className="content">
                  <div>
                    After our streaming period ends, you keep a limited-edition
                    digital album cover NFT. Stored on the blockchain, these
                    assets let you own a piece of music history and{" "}
                    <em>prove</em> you’re a top fan. Build your library and show
                    it off!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="p-info">
        Get answers and learn more about our eco-friendly NFTs on our{" "}
        <Link to="/faq">FAQ</Link> page
      </p>
      <div className="bottom-tag">
        <img src={bottomWave} alt="bottom-wave" className="bottom-wave" />
      </div>
    </section>
  );
}

export default HowItWorks;
