import React from "react";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import "./TermsOfServiceStyles.scss";
import spotlight_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_right from "../../assets/images/spotlight_outline_right_yellow.svg";

import TermsList from "./TermsList";

function TermsOfService(props) {
  return (
    <section id="terms-of-service">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      <div className="tos-title">
        <h1>
          {" "}
          <img
            className="spotlight-left"
            src={spotlight_left}
            alt="spotlight"
          />
          <img
            className="spotlight-right"
            src={spotlight_right}
            alt="spotlight"
          />
          PRIVACY POLICY & TERMS OF USE{" "}
        </h1>
      </div>
      <TermsList />

      <Footer />
    </section>
  );
}

export default TermsOfService;
