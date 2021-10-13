import React from "react";
import "./LogoutStyles.scss";
import { ReactComponent as PulseLoader } from "../../assets/images/pulse_loader.svg";

function Logout() {
  return (
    <section id="logout">
      <div className="logout-container">
        <div className="message">
          <p> Logging you out...</p>
        </div>
        <PulseLoader />
      </div>
    </section>
  );
}

export default Logout;
