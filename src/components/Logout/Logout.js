import React from "react";
import "./LogoutStyles.scss";
import bars_loading from "../../assets/images/pulse_loader.svg";

function Logout() {
  return (
    <section id="logout">
      <div className="logout-container">
        <div className="message">
          <p> Logging you out...</p>
        </div>

        <img src={bars_loading} alt="loading" />
      </div>
    </section>
  );
}

export default Logout;
