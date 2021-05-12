import React from "react";
import bgImage from "../../assets/images/blackslant.svg";
import "./HowItWorksBgStyles.scss";

function HowItWorksBackground() {
  return (
    <div className="background">
      <img src={bgImage} alt="background" />
    </div>
  );
}

export default HowItWorksBackground;
