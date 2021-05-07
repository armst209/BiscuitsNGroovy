import React from "react";
import { Link } from "react-router-dom";
import "./ReminderSectionStyles.scss";

function ReminderSection() {
  return (
    <div id="reminder">
      <p>Artists -- Tired of earning pennies from streaming? </p>
      <p>We’ll help you earn more money and connect with your top fans.</p>
      <p>
        Read more about the benefits of releasing on BnG{" "}
        <Link to="/artists">here</Link>
      </p>
      <a className="button-link" href="#above-howto">
        <button>Start Your Collection</button>
      </a>
    </div>
  );
}

export default ReminderSection;
