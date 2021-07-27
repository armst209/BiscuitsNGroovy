import React from "react";
import pulse from "../../assets/images/pulse_loader.svg";
import "./LoadingStyles.scss";

function ComponentLoading() {
  return (
    <div id="loading">
      <img src={pulse} alt="pulse loader" />
    </div>
  );
}

export default ComponentLoading;
