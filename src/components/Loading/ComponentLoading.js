import React from "react";
import { ReactComponent as PulseLoader } from "../../assets/images/pulse_loader.svg";
import "./LoadingStyles.scss";

function ComponentLoading() {
  return (
    <div id="loading">
      <PulseLoader />
    </div>
  );
}

export default ComponentLoading;
