import React from "react";
import { ReactComponent as PulseLoader } from "../../assets/images/pulse_loader.svg";
import "./LoadingStyles.scss";

function Loading() {
  return (
    <div className="loader-wrapper">
      <PulseLoader />
    </div>
  );
}

export default Loading;
