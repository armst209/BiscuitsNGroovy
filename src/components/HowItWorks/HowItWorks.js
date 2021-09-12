import { React, useState } from "react";
import "./HowItWorksStyles.scss";
import { Link } from "react-router-dom";

import loveSong from "../../assets/images/love-song2.svg";
import voice from "../../assets/images/voice.svg";
import collect from "../../assets/images/collectshare.svg";
import record_header_icon from "../../assets/images/compact-disc-yellow.svg";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";

function HowItWorks() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  return (
    <section id="how-it-works">
      {/* <img
        className="spotlight-top-left"
        src={spotlight_yellow_left}
        alt="spotlight icon"
      />
      <img
        className="spotlight-top-right"
        src={spotlight_yellow_right}
        alt="spotlight icon"
      /> */}
      <div className="how-it-works-container">
        <div className="box-title">
          <h1>
            <img
              className="record-header-icon"
              src={record_header_icon}
              alt="record "
            />
            <div>HOW IT WORKS</div>
          </h1>
        </div>
        <div className="boxes">
          <div className="box" onClick={() => setContent1(!content1)}>
            <div className="box-border">
              <div className="box-content">
                <div className="icon-headers">
                  <div className="how-icon">
                    <img src={loveSong} alt="love-icon" />
                  </div>
                  <div className="headers">
                    <h4>EXCLUSIVE MUSIC</h4>
                    <h6>FOR SUPERFANS</h6>
                  </div>
                </div>
                <div className="content">
                  <div>
                    We partner with trendsetting artists to debut their
                    unreleased music on Biscuits n Groovy. Show your loyalty,
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
                  <div className="how-icon">
                    <img src={voice} alt="voice-icon" />
                  </div>
                  <div className="headers">
                    <h4>STREAM HERE</h4>
                    <h6>BEFORE IT'S GONE</h6>
                  </div>
                </div>
                <div className="content">
                  <div>
                    We're not another unlimited subscription. Buy the music you
                    want to hear, and stream with us before it drops anywhere
                    else. Get it while it’s hot, since it’s only only streaming
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
                  <div className="how-icon">
                    <img src={collect} alt="collect-icon" />
                  </div>
                  <div className="headers">
                    <h4>COLLECT & SHARE</h4>
                    <h6> YOUR EXCLUSIVE RECORDS</h6>
                  </div>
                </div>

                <div className="content">
                  <div>
                    With each release you collect a limited-edition digital
                    album cover NFT. Stored on the blockchain, these assets let
                    you own a permanent piece of music history and{" "}
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
        Get answers and learn more about our <span>eco-friendly</span> NFTs on
        our <Link to="/faq">FAQ</Link> page
      </p>
    </section>
  );
}

export default HowItWorks;
