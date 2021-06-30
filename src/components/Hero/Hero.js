import { React } from "react";
import "./HeroStyles.scss";
import { Link } from "react-router-dom";
import DesktopBackground from "../Background/DesktopBackground";
import HeroSpotlightBackgroundRight from "../Background/HeroSpotlightBackgroundRight";
import HeroSpotlightBackgroundLeft from "../Background/HeroSpotlightBackgroundLeft";
import spotlight from "../../assets/images/spotlight2_white.png";
import headphones from "../../assets/images/headphones_color.svg";

// import SoundBarDesktop from "../SoundBars/SoundBarDesktop";

// import BackgroundImage from "../Background/BackgroundImage";

function Hero(props) {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-titles">
            <div className="hero-text">
              <div className="h1-wrapper">
                <div className="new-music">
                  <h1 className="h1-new">NEW</h1>
                  <h1>MUSIC</h1>
                </div>
                <div className="is-our-jam">
                  <div className="is-our">
                    <h1 className="is-h1">IS</h1> <h1>OUR</h1>
                  </div>
                  <div className="jam">
                    <h1>JAM</h1>
                  </div>
                </div>
              </div>

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

          <div className="hero-images">
            {/* <HeroSpotlightBackgroundLeft />
            <HeroSpotlightBackgroundRight /> */}
            <div className="hero-image-container">
              {/* <DesktopBackground /> */}
              <img src={headphones} alt="hero section headphones" />
            </div>
            <div className="featured">
              <h1>
                <div>
                  <div>Featured Artist:</div>
                  <div>Kanye West</div>
                </div>
                {/* <div>
                  <img src={spotlight} alt="spotlight" />
                </div> */}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroBackground /> */}
    </section>
  );
}

export default Hero;
