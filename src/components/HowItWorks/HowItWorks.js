import React from "react";
import "./HowItWorksStyles.scss";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <section id="how-it-works">
      <h1>HOW IT WORKS</h1>
      <div className="hiw-boxes">
        <div>
          <h3>New Releases / for true fans only</h3>
          <p>
            We partner with trendsetting artists to debut their new music
            exclusively on Biscuits n Groovy. Show your loyalty and support your
            favorite artists directly with each purchase.
          </p>
        </div>
        <div>
          <h3> Stream Here / before the other guys</h3>
          <p>
            We're not another unlimited subscription. Buy the music you can't
            wait to hear, and stream with us before it drops anywhere else. Get
            it while it’s hot, since it’s only on BnG for a limited time.
          </p>
        </div>
        <div>
          <h3>Collect & Share / your exclusive records</h3>
          <p>
            After our streaming window expires, you keep a{" "}
            <strong>limited-edition digital album cover NFT</strong>{" "}
            limited-edition digital album cover NFT. Stored on the blockchain,
            these assets let you own a piece of music history and prove you’re a
            top fan. Build your library and show it off!{" "}
          </p>
        </div>
      </div>
      <div className="hiw-content">
        <p>
          Get answers and learn more about NFTs on our{" "}
          <Link to="/faq">FAQ</Link> page
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
