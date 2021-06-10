import React from "react";
import { Link } from "react-router-dom";
import "./ReminderSectionStyles.scss";
import "../Hero/HeroStyles.scss";
import spotlight from "../../assets/images/spotlight2.png";
import spotlight_reverse from "../../assets/images/spotlight2_reverse.png";

function ReminderSection() {
  return (
    <section id="reminder">
      <div className="artist-reminder">
        <div>
          <img src={spotlight_reverse} alt="spotlight" className="light-left" />
        </div>
        <p>
          <span>Artists</span> -- Tired of earning pennies from streaming? We’ll
          help you earn more money and connect with your top fans. Read more
          about the benefits of releasing on BnG <Link to="/artists">here</Link>
        </p>
        <div>
          <img src={spotlight} alt="spotlight" />
        </div>
      </div>
    </section>
  );
}

export default ReminderSection;
