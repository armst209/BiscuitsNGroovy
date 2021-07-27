import React from "react";
import pulse from "../../assets/images/pulse_loader.svg";
import "./LoadingStyles.scss";

function Loading() {
  return (
    <div className="loader-wrapper">
      <img src={pulse} alt="pulse loader" />
      <div></div>
    </div>
  );
}

export default Loading;
