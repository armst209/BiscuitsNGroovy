import React from "react";
import "./HeroBackgroundStyles.scss";
import bgImage from "../../assets/images/bg-image.png";

function HeroBackground() {
  return (
    <div className="background">
      <img src={bgImage} alt="background" />
    </div>
  );
}

export default HeroBackground;
