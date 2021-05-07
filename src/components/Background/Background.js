import React from "react";
import "./Background.scss";
import bgImage from "../../assets/images/bg-image.png";

function Background() {
  return (
    <div className="background">
      <img src={bgImage} alt="background" />
    </div>
  );
}

export default Background;
