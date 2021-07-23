import React from "react";
import { Link } from "react-router-dom";
import "./ReminderSectionStyles.scss";
import "../Hero/HeroStyles.scss";
import spotlight from "../../assets/images/spotlight2.png";
import artist_icon from "../../assets/images/karaoke_4796875.svg";
import spotlight_reverse from "../../assets/images/spotlight2_reverse.png";
import artist from "../../assets/images/artist-turntables.jpg";
// import spotlight_middle from "../../assets/images/idea.png";

function ReminderSection() {
  return (
    <section id="reminder">
      <div className="artist-reminder-wrapper">
        <div className="artist-reminder">
          <div className="artist-message">
            <h1>Are you an artist?</h1>

            <p>
              Tired of earning pennies from streaming?We’ll help you earn more
              money and connect with your top fans. Read more about the benefits
              of releasing your music on BnG :
            </p>

            <Link to="/artists">
              <button>
                For Artists <img src={artist_icon} alt="artist icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReminderSection;
