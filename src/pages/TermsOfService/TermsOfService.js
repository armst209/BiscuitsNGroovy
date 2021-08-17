import React from "react";
import { Route, Router, Switch, Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import "./TermsOfServiceStyles.scss";
import open_book from "../../assets/images/open-book.svg";
import Subscriber from "./Terms/Subscriber";

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

      <div className="term-link-wrapper">
        <div className="term-link-container">
          <div className="terms-image">
            <img src={open_book} alt="book icon" />
          </div>
          <div className="list-container">
            <ul>
              <li>
                {/* <Link to="/terms_of_service/subscriber_terms">Subscriber</Link> */}
                <Link
                  to={(location) => ({
                    ...location,
                    pathname: "/terms-of-service/subscriber",
                  })}
                >
                  Subscriber
                </Link>
              </li>
              <li>
                <Link to="">Purchase Of Music</Link>
              </li>
              <li>
                <Link to="">Non-Fungible Tokens (NFTs)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default TermsOfService;
