import React from "react";
import "./HeroStyles.scss";
import albumCover from "../../assets/images/808s_&_Heartbreak.png";
import HeroBackground from "../Background/HeroBackground";
import SoundBars from "../SoundBars/SoundBar";

function Hero() {
  return (
    <section id="hero">
      <HeroBackground />

      <div className="hero-titles">
        <div className="hero-text">
          <h1>MUSIC</h1>
          <h1>IS OUR </h1>
          <h1>JAM</h1>

          <h3>
            Get early access to new releases <br /> from your favorite artists,
            <br />
            and, exclusive NFT album art
          </h3>
        </div>

        <div className="social-media">
          <ul>
            <li>
              <a href="https://www.instagram.com/bngroovymusic/">
                <i className="fab fa-instagram "></i>
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/ajxyu54lfjlxoc8a7dzx59odj?si=crL_VRaXSUiBRDEW8-31xg&nd=1">
                <i className="fab fa-spotify"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bngroovy">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a className="hero-button" href="#above-howto">
            <button>Start Your Collection</button>
          </a>
        </div>
      </div>
      <div className="hero-content">
        <div>
          <img src={albumCover} alt="album cover" />
        </div>
        <div>
          <p>Featured Artist: Kanye West</p>
        </div>
      </div>

      <div>
        <SoundBars />
      </div>
    </section>
  );
}

export default Hero;
