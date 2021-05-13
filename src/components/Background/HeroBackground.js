import React from "react";
import "./HeroBackgroundStyles.scss";
import bgImage from "../../assets/images/bg-image-large2.png";

function HeroBackground() {
  return (
    <div className="background">
      <img className="yellow-bg" src={bgImage} alt="background" />
    </div>
  );
}

export default HeroBackground;
