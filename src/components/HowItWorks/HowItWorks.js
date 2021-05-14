import { React, useState } from "react";
import "./HowItWorksStyles.scss";
// import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import bgImage from "../../assets/images/blackslant.svg";
import loveSong from "../../assets/images/love-song2.svg";
import voice from "../../assets/images/voice.svg";
import collect from "../../assets/images/headphones2.svg";
import bottomWave from "../../assets/images/blackslant2.svg";

// import arrowDown from "../../assets/images/arrow-down.svg";

function HowItWorks() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  return (
    <section id="how-it-works">
      <img src={bgImage} alt="background" />
      <h1>HOW IT WORKS</h1>
      <div className="boxes">
        <div className="box" onClick={() => setContent1(!content1)}>
          <div className="box-border">
            <h3>
              New Releases <br /> for true fans only
            </h3>
            <div className="how-icon">
              <img src={loveSong} alt="love-icon" />
            </div>
            <div className="read-more" onClick={() => setContent1(!content1)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 13.75L12 19.25L6.75 13.75"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 18.25V4.75"
                />
              </svg>
            </div>
          </div>
          <CSSTransition
            classNames="content"
            in={content1}
            timeout={300}
            unmountOnExit
            onEnter={() => setContent1(true)}
            onExited={() => setContent1(false)}
          >
            <div className="content">
              <div>
                We partner with trendsetting artists to debut their new music
                exclusively on Biscuits n Groovy. Show your loyalty and support
                your favorite artists directly with each purchase.
              </div>
              <div>Read More</div>
            </div>
          </CSSTransition>
        </div>
        <div className="box" onClick={() => setContent2(!content2)}>
          <div className="box-border">
            <h3>
              Stream Here /<br /> before the other guys
            </h3>
            <div className="how-icon">
              <img src={voice} alt="voice-icon" />
            </div>
            <div className="read-more" onClick={() => setContent2(!content2)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 13.75L12 19.25L6.75 13.75"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 18.25V4.75"
                />
              </svg>
            </div>
          </div>
          <CSSTransition
            classNames="content"
            in={content2}
            timeout={300}
            unmountOnExit
            onEnter={() => setContent2(true)}
            onExited={() => setContent2(false)}
          >
            <div className="content">
              <p>
                We're not another unlimited subscription. Buy the music you
                can't wait to hear, and stream with us before it drops anywhere
                else. Get it while it’s hot, since it’s only on BnG for a
                limited time.
              </p>
              <button>Read More</button>
            </div>
          </CSSTransition>
        </div>
        <div className="box" onClick={() => setContent3(!content3)}>
          <div className="box-border">
            <h3>
              Collect & Share / <br />
              your exclusive records
            </h3>
            <div className="how-icon">
              <img src={collect} alt="collect-icon" />
            </div>
            <div className="read-more" onClick={() => setContent3(!content3)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 13.75L12 19.25L6.75 13.75"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 18.25V4.75"
                />
              </svg>
            </div>
          </div>
          <CSSTransition
            classNames="content"
            in={content3}
            timeout={300}
            unmountOnExit
            onEnter={() => setContent3(true)}
            onExited={() => setContent3(false)}
          >
            <div className="content">
              <p>
                After our streaming window expires, you keep a
                <strong>limited-edition digital album cover NFT</strong>
                limited-edition digital album cover NFT. Stored on the
                blockchain, these assets let you own a piece of music history
                and prove you’re a top fan. Build your library and show it off!
              </p>

              <button>Read More</button>
            </div>
          </CSSTransition>
        </div>
      </div>

      <img src={bottomWave} alt="bottom-wave" className="bottom-wave" />
    </section>
  );
}

export default HowItWorks;
