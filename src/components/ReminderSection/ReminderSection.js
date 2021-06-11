import React from "react";
import { Link } from "react-router-dom";
import "./ReminderSectionStyles.scss";
import "../Hero/HeroStyles.scss";
import spotlight from "../../assets/images/spotlight2.png";
import spotlight_reverse from "../../assets/images/spotlight2_reverse.png";
// import spotlight_middle from "../../assets/images/idea.png";

function ReminderSection() {
  return (
    <section id="reminder">
      <div className="artist-reminder">
        <div>
          <img src={spotlight} alt="spotlight" className="light-left" />
        </div>
        <div className="artist-message">
          <p className="title">Artists -- </p>
          <p>
            {" "}
            Tired of earning pennies from streaming? We’ll help you earn more
            money and connect with your top fans. Read more about the benefits
            of releasing on BnG{" "}
          </p>

          <p className="title">
            <Link to="/artists">here</Link>
          </p>
        </div>
        {/* <img src={spotlight_middle} alt="spotlight" className="light-middle" /> */}
        <div>
          <img
            src={spotlight_reverse}
            alt="spotlight"
            className="light-right"
          />
        </div>
      </div>
    </section>
  );
}

export default ReminderSection;
