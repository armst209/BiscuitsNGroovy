import React from "react";
import "./HeroStyles.scss";
import albumCover from "../../assets/images/808s_&_Heartbreak.png";
import HeroBackground from "../Background/HeroBackground";
import SoundBars from "../SoundBars/SoundBar";
import DesktopBackground from "../Background/DesktopBackground";
import SoundBarDesktop from "../SoundBars/SoundBarDesktop";

function Hero() {
  return (
    <section id="hero">
      <HeroBackground />
      <DesktopBackground />
      <div className="hero-main">
        <div className="hero-titles">
          <div className="hero-text">
            <h1>NEW</h1>
            <h1>MUSIC</h1>
            <h1>IS OUR </h1>
            <h1>JAM</h1>

            <h3>
              Get early access to new releases <br /> from your favorite
              artists,
              <br />
              and, exclusive NFT album art
            </h3>
            <div>
              <a className="hero-button" href="#above-howto">
                <button>Start Your Collection</button>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-content"></div>
      </div>
      <div className="featured">
        <p>Featured Artist: Kanye West</p>
      </div>
      <div className="album-cover">
        <img src={albumCover} alt="album cover" />
      </div>
      <SoundBars />
      <div className="soundbar-content">
        <SoundBarDesktop />
      </div>
    </section>
  );
}

export default Hero;
