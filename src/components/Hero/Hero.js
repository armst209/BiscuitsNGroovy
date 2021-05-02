import React from "react";
import "./HeroStyles.scss";
import albumCover from "../../assets/images/808s_&_Heartbreak.png";
import soundBars from "../../assets/images/bars 2.png";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-titles">
        <p>MUSIC IS OUR JAM</p>
        <p>
          Get early access to new releases from your favorite artists, and
          exclusive NFT album art
        </p>
        <button>Start Your Collection</button>
      </div>
      <div className="hero-content">
        <div>
          <img src={albumCover} alt="album cover" />
        </div>
        <p>Featured Artist: Kanye West</p>
        <img src={soundBars} alt="sound bars" />
      </div>
    </section>
  );
}

export default Hero;
