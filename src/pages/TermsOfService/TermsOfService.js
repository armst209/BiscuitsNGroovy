import React from "react";
import NotHomeNavigation from "../../components/Navbars/NotHomeNavigation/NotHomeNavigation";
import Footer from "../../components/Footer/Footer";
import "./TermsOfServiceStyles.scss";
import spotlight_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_right from "../../assets/images/spotlight_outline_right_yellow.svg";

import TermsList from "./TermsList";

function TermsOfService({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  return (
    <section id="terms-of-service">
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
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
