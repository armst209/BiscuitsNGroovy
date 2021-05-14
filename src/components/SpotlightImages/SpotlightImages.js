import React from "react";
import spotlight from "../../assets/images/spotlight-down.svg";
import "./SpotlightImagesStyles.scss";

function SpotlightImages() {
  return (
    <div className="spotlight-bg">
      <img className="spotlight1" src={spotlight} alt="background" />
      {/* <img className="spotlight2" src={spotlight} alt="background" /> */}
    </div>
  );
}

export default SpotlightImages;
