import React from "react";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";

function TermsOfService(props) {
  return (
    <section id="terms-of-service">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      <Footer />
    </section>
  );
}

export default TermsOfService;
