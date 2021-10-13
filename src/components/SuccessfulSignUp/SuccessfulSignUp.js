import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./SuccessfulSignUpStlye.scss";

function SuccessfulSignUp() {
  return (
    <section id="successful-signup">
      <div className="successful-signup-wrapper">
        <div className="successful-signup-content">
          <h2>Success!</h2>
          <div className="successful-text">
            Your account is all set up. Access it{" "}
            <Link to="/collection">here</Link>. Now you're ready to start
            collecting new music. Click below to browse our available releases
            and get groovin'
          </div>
          <HashLink className="collection-link" to="/#music-showcase">
            <button className="start-btn">Start Your Collection</button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}

export default SuccessfulSignUp;
