import React from "react";
import spotlight from "../../assets/images/spotlight-upward-hero.png";
import "./HeroSpotlightBackgroundLeftStyles.scss";

function HeroSpotlightBackgroundLeft() {
  return (
    <div className="hero-spotlight-left">
      <img src={spotlight} alt="spotlight" />
    </div>
  );
}

export default HeroSpotlightBackgroundLeft;
