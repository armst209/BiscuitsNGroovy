import { React, useState } from "react";
import "./HeroStyles.scss";
import albumCover from "../../assets/images/808s_&_Heartbreak.png";
import HeroBackground from "../Background/HeroBackground";
import SoundBars from "../SoundBars/SoundBar";
import DesktopBackground from "../Background/DesktopBackground";
import HeroSpotlightBackground from "../Background/HeroSpotlightBackground";
import spotlight from "../../assets/images/spotlight2_white.png";
// import SoundBarDesktop from "../SoundBars/SoundBarDesktop";
import { CSSTransition } from "react-transition-group";
// import BackgroundImage from "../Background/BackgroundImage";

function Hero() {
  const [openAlbum, setOpenAlbum] = useState("false");

  const albumCoverTransition = () => {
    setOpenAlbum(!openAlbum);
    console.log("hit");
  };
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-titles">
            <div className="hero-text">
              <h1>NEW</h1>
              <h1>MUSIC</h1>
              <h1>IS OUR </h1>
              <h1>JAM</h1>

              <h3 onClick={albumCoverTransition}>
                Get early access to new releases <br /> from your favorite
                artists,
                <br />
                and exclusive NFT album art
              </h3>
              <div className="hero-buttons">
                <a href="#">
                  <button className="start">Start Your Collection</button>
                </a>
                <a href="#how-it-works">
                  <button className="learn">Learn How It Works</button>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-images">
            <HeroSpotlightBackground />
            <div className="hero-image-container">
              <DesktopBackground />

              {/* {openAlbum ? "album-cover" : "album-active"} */}
            </div>

            <div className="featured">
              <h1>
                <div>Featured Artist: Kanye West</div>

                <div>
                  <img src={spotlight} alt="spotlight" />
                </div>
              </h1>
            </div>
            <SoundBars />
          </div>
        </div>
      </div>
      {/* <HeroBackground /> */}
    </section>
  );
}

export default Hero;
