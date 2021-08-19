import { React } from "react";
import "./HeroStyles.scss";
import "./HeroPhoneTabletQueries.scss";
import { Link } from "react-router-dom";
import vinyl_bg from "../../assets/images/compact-disc-yellow.svg";
import HeroBackground from "../Background/HeroBackground";
import headphones from "../../assets/images/808s_&_Heartbreak.png";
import hero_artist_icon from "../../assets/images/karaoke_black.svg";
import hero_record_icon from "../../assets/images/vinyl.svg";

// import SoundBarDesktop from "../SoundBars/SoundBarDesktop";

// import BackgroundImage from "../Background/BackgroundImage";

function Hero(props) {
  return (
    <section id="hero">
      <HeroBackground />
      <div className="hero-container">
        <div className="hero-main">
          <img className="vinyl-bg" src={vinyl_bg} alt="vinyl background" />

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
                <h3>
                  <div>
                    Stream exclusive music from your favorite artists, and
                    collect NFT album art Available only for a limited time,
                    only for true fans.
                  </div>
                </h3>
                <div className="hero-buttons">
                  <Link to="#music-showcase">
                    <button className="start">
                      <div className="start-text">Start Your Collection</div>
                      <img src={hero_record_icon} alt="record icon" />
                    </button>
                  </Link>
                  <Link to="/artists">
                    <button className="learn">
                      For Artists
                      <img src={hero_artist_icon} alt="artist icon" />
                    </button>
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
