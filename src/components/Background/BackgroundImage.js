import { React, lazy } from "react";
import "./BackgroundImageStyles.scss";
import background from "../../assets/images/1_XpQiGH0DMQUijuDiHoPWcw.jpeg";

function BackgroundImage() {
  return (
    <div className="background-image">
      <img src={background} alt="background" />
    </div>
  );
}

export default BackgroundImage;
