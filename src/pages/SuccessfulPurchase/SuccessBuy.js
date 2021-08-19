import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import "./SuccessfulBuyStyles.scss";
function SuccessBuy(props) {
  return (
    <section id="purchase-success">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      <div className="purchase-success-content">
        Transaction was successful.
      </div>
      <Footer />
    </section>
  );
}

export default SuccessBuy;
