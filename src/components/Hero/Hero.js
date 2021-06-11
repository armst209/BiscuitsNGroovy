import { React, useState } from "react";
import "./HeroStyles.scss";
// import albumCover from "../../assets/images/808s_&_Heartbreak.png";
import HeroBackground from "../Background/HeroBackground";
import SoundBars from "../SoundBars/SoundBar";
import DesktopBackground from "../Background/DesktopBackground";
// import SoundBarDesktop from "../SoundBars/SoundBarDesktop";
import { CSSTransition } from "react-transition-group";

function Hero() {
  const [openAlbum, setOpenAlbum] = useState("false");

  const albumCoverTransition = () => {
    setOpenAlbum(!openAlbum);
    console.log("hit");
  };
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

            <h3 onClick={albumCoverTransition}>
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
      <CSSTransition>
        <div className={openAlbum ? "album-cover" : "album-active"}>
          {/* <img src={albumCover} alt="album" /> */}
        </div>
      </CSSTransition>
      <SoundBars />
      <div className="soundbar-content">{/* <SoundBarDesktop /> */}</div>
    </section>
  );
}

export default Hero;
