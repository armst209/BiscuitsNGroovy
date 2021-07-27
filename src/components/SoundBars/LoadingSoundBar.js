import React from "react";
import "./LoadingSoundbarStyles.scss";
import pulse_loader from "../../assets/images/loader_2.svg";

function LoadingSoundBar() {
  return (
    <section id="sound-bar">
      <img src={pulse_loader} alt="loader" />
      {/* <div className="container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}
    </section>
  );
}

export default LoadingSoundBar;
