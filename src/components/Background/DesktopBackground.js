import React from "react";
import "./DesktopBackgroundStyles.scss";
import bgImage from "../../assets/images/desktop-triangle.png";

function DesktopBackground() {
  return (
    <div className="desktop-background">
      <img className="desktop-bg" src={bgImage} alt="background" />
    </div>
  );
}

export default DesktopBackground;
