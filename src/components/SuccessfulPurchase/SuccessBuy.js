import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./SuccessfulBuyStyles.scss";
function SuccessBuy() {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <section id="purchase-success">
      <div className="purchase-success-content">
        <h1>Thank you for your Purchase!</h1>
        <p>Head to your collection to start groovin'!</p>
        <Link to="/collection">
          <button className="collection-button">Head to Collection</button>
        </Link>
      </div>
    </section>
  ) : (
    <Redirect to={"/"} />
  );
}

export default SuccessBuy;
