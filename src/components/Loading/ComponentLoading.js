import React from "react";
import pulse from "../../assets/images/pulse_loader.svg";
import "./ComponentLoadingStyles.scss";

function ComponentLoading() {
  return (
    <div className="loader-wrapper">
      <img src={pulse} alt="pulse loader" />
      <hr />
    </div>
  );
}

export default ComponentLoading;
