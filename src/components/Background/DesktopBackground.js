import React from "react";
import "./DesktopBackgroundStyles.scss";
import bgImage from "../../assets/images/desktop-triangle2.png";
import album_cover from "../../assets/images/808s_&_Heartbreak.png";

function DesktopBackground() {
  return (
    <div className="hero-album-image">
      <img className="vinyl-sleeve" src={bgImage} alt="vinyl sleeve" />
      <img className="album" src={album_cover} alt="album" />
    </div>
  );
}

export default DesktopBackground;
