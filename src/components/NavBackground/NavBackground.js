import React from "react";
import "./NavBackgroundStyles.scss";
import bgImage from "../../assets/images/nav-bg.png";

function NavBackground() {
  return (
    <div className="nav-background">
      <img src={bgImage} alt="navbackground" />
    </div>
  );
}

export default NavBackground;
