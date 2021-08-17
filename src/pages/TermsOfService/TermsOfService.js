import React from "react";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import "./TermsOfServiceStyles.scss";

import TermsList from "./TermsList";

function TermsOfService(props) {
  return (
    <section id="terms-of-service">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      <div className="tos-title">
        <h1>TERMS OF SERVICE</h1>
      </div>
      <TermsList />

      <Footer />
    </section>
  );
}

export default TermsOfService;
