import React from "react";
import { Link } from "react-router-dom";
import "./ReminderSectionStyles.scss";
import "../Hero/HeroStyles.scss";

function ReminderSection() {
  return (
    <section id="reminder">
      <div>
        <div>
          <p>
            Artists -- Tired of earning pennies from streaming? We’ll help you
            earn more money and connect with your top fans. Read more about the
            benefits of releasing on BnG <Link to="/artists">here</Link>
          </p>
        </div>

        <div className="empty-div"></div>
      </div>
    </section>
  );
}

export default ReminderSection;
