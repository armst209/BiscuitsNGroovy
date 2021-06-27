import { React } from "react";
import "./HeroStyles.scss";
import { Link } from "react-router-dom";
import SoundBars from "../SoundBars/SoundBar";
import DesktopBackground from "../Background/DesktopBackground";
import HeroSpotlightBackgroundRight from "../Background/HeroSpotlightBackgroundRight";
import HeroSpotlightBackgroundLeft from "../Background/HeroSpotlightBackgroundLeft";
import spotlight from "../../assets/images/spotlight2_white.png";

// import SoundBarDesktop from "../SoundBars/SoundBarDesktop";

// import BackgroundImage from "../Background/BackgroundImage";

function Hero(props) {
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
              <h3>
                Get early access to new releases from your favorite artists, and
                exclusive NFT album art
              </h3>
              <div className="hero-buttons">
                <Link to="#music-showcase">
                  <button className="start">Start Your Collection</button>
                </Link>
                <Link to="/artists">
                  <button className="learn">For Artists</button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="hero-images"> */}
          <HeroSpotlightBackgroundLeft />
          <HeroSpotlightBackgroundRight />
          {/* <div className="hero-image-container">
              <DesktopBackground />

           
            </div>

            <div className="featured">
              <h1>
                <div>Featured Artist: Kanye West</div>

                <div>
                  <img src={spotlight} alt="spotlight" />
                </div>
              </h1>
            </div>
            <SoundBars /> */}
          {/* </div> */}
        </div>
      </div>
      {/* <HeroBackground /> */}
    </section>
  );
}

export default Hero;
