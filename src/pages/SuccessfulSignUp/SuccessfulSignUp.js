import React from "react";
import { Link } from "react-router-dom";
import "./SuccessfulSignUpStlye.scss";
import success_fireworks from "../../assets/images/success-fireworks-yellow.svg";

function SuccessfulSignUp() {
  return (
    <section id="successful-signup">
      <div className="successful-signup-wrapper">
        <div className="successful-signup-content">
          <h2>Success!</h2>
          <div className="successful-text">
            Your account is all set up. Access it <Link to="/portal">here</Link>
            . Now you're ready to start collecting new music. Click below to
            browse our available releases and get groovin'
          </div>
          <Link className="collection-link" to="/home#music-showcase">
            <button className="start-btn">Start Your Collection</button>
          </Link>
          <img className="fireworks" src={success_fireworks} alt="fireworks" />
        </div>
      </div>
    </section>
  );
}

export default SuccessfulSignUp;
