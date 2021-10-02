import React from "react";
import { Link } from "react-router-dom";
import "./SuccessfulBuyStyles.scss";
function SuccessBuy() {
  return (
    <section id="purchase-success">
      <div className="purchase-success-content">
        <h1>Thank you for your Purchase!</h1>
        <p>Head to your collection to start groovin'!</p>
        <Link to="/collection">
          <button className="collection-button">Collection</button>
        </Link>
      </div>
    </section>
  );
}

export default SuccessBuy;
