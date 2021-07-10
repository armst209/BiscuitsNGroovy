import { React } from "react";
import "./HeroStyles.scss";
import { Link } from "react-router-dom";
import blob from "../../assets/images/blob.svg";
import hero_bg from "../../assets/images/hero-titles.svg";
import HeroBackground from "../Background/HeroBackground";
import DesktopBackground from "../Background/DesktopBackground";
import HeroSpotlightBackgroundRight from "../Background/HeroSpotlightBackgroundRight";
import HeroSpotlightBackgroundLeft from "../Background/HeroSpotlightBackgroundLeft";
import spotlight from "../../assets/images/spotlight2_white.png";
import headphones from "../../assets/images/808s_&_Heartbreak.png";

// import SoundBarDesktop from "../SoundBars/SoundBarDesktop";

// import BackgroundImage from "../Background/BackgroundImage";

function Hero(props) {
  return (
    <section id="hero">
      <HeroBackground />
      <div className="hero-container">
        <div className="hero-main">
          {/* <div className="hero-box"></div> */}

          <div className="hero-titles">
            {/* <img className="hero-bg" src={hero_bg} alt="hero background" /> */}
            <div className="hero-text">
              <div className="hero-text-wrapper">
                {/* <h1>
                  New <br />
                  Music Is
                  <br />
                  Our Jam
                </h1> */}
                <div className="new-music">
                  <h1 className="h1-new">New</h1>
                  <h1>Music</h1>
                </div>
                <div className="is-our-jam">
                  <div className="is-our">
                    <h1 className="is-h1">Is</h1> <h1>Our</h1>
                  </div>
                  <div className="jam">
                    <h1>Jam</h1>
                  </div>
                </div>
                <h3>
                  <div>
                    Get early access to new releases from your favorite artists,
                    and exclusive NFT album art
                  </div>
                </h3>
                <div className="hero-buttons">
                  <Link to="#music-showcase-link">
                    <button className="start">Start Your Collection</button>
                  </Link>
                  <Link to="/artists">
                    <button className="learn">For Artists</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-images">
            {/* <HeroSpotlightBackgroundLeft />
            <HeroSpotlightBackgroundRight /> */}
            <div className="hero-image-container">
              <img src={headphones} alt="hero section headphones" />
            </div>
            <div className="featured">
              <h1>
                <div className="featured-artist">Featured Artist:</div>
                <div>Kanye West</div>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-mobile">
        <h1>
          <div className="featured-artist">Featured Artist:</div>
          <div>Kanye West</div>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
