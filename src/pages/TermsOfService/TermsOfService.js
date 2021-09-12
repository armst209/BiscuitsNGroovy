import React from "react";

import "./TermsOfServiceStyles.scss";
import spotlight_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_right from "../../assets/images/spotlight_outline_right_yellow.svg";

import TermsList from "./TermsList";

function TermsOfService() {
  return (
    <section id="terms-of-service">
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
    </section>
  );
}

export default TermsOfService;
