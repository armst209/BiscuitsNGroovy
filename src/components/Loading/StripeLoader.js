import React from "react";
import pulse from "../../assets/images/pulse_loader.svg";
import "./StripeLoadingStyles.scss";
function StripeLoader() {
  return (
    <section id="stripe-loader">
      <div className="stripe-container">
        <div className="message">
          <p> Redirecting you to Stripe Checkout...</p>
        </div>

        <img src={pulse} alt="loading" />
      </div>
    </section>
  );
}

export default StripeLoader;
