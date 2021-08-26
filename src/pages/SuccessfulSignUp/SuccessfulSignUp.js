import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NotHomeNavigation from "../../components/Navbars/NotHomeNavigation/NotHomeNavigation";

function SuccessfulSignUp({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  return (
    <section id="successful-signup">
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
      />
      <div className="successful-signup-wrapper">
        <div className="successful-signup-content">
          <h2>Success! </h2>
          <div>
            Your account is all set up. Access it here Now you're ready to start
            collecting new music. Click below to browse our available releases
            and get groovin'
          </div>
          <Link to="/home#music-showcase">
            <button className="start-btn">Start Your Collection</button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default SuccessfulSignUp;
