import React from "react";
import pulse from "../../assets/images/pulse_loader.svg";
import "./ComponentLoadingStyles.scss";

function ComponentLoading() {
  return (
    <div>
      <img src={pulse} alt="pulse loader" />
    </div>
  );
}

export default ComponentLoading;
