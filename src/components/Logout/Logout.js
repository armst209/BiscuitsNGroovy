import React from "react";
import "./LogoutStyles.scss";
import logo from "../../assets/images/website headerblack.png";
import bars_loading from "../../assets/images/pulse_loader.svg";
import Navbar from "../Navbars/MainNavigation/MainNavigation";
import Footer from "../Footer/Footer";

function Logout() {
  return (
    <section id="logout">
      <div className="logout-container">
        <div className="message">
          <p> Logging you out...</p>
        </div>

        <img src={bars_loading} alt="loading" />
      </div>
      {/* <Footer /> */}
    </section>
  );
}

export default Logout;
