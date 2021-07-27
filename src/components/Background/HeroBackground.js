import React from "react";
import "./HeroBackgroundStyles.scss";
import bgImage from "../../assets/images/desktop-triangle-half.png";
import mobile_image from "../../assets/images/bg-image-large2.png";

function HeroBackground() {
  return (
    <section id="hero-background">
      <div className="background">
        <img className="yellow-bg-desktop" src={bgImage} alt="background" />
      </div>
      <div className="background-mobile">
        <img className="yellow-bg-mobile" src={mobile_image} alt="background" />
      </div>
    </section>
  );
}

export default HeroBackground;
