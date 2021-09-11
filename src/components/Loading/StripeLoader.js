import React from "react";
import pulse from "../../assets/images/pulse_loader.svg";
import "./StripeLoadingStyles.scss";
function StripeLoader() {
  return (
    <section id="stripe-loader">
      <div className="stripe-container">
        <img src={pulse} alt="loading" />
        <div className="message">
          <p> Redirecting to Stripe Checkout...</p>
        </div>
      </div>
    </section>
  );
}

export default StripeLoader;
