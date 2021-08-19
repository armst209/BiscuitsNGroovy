import React from "react";
import { Link } from "react-router-dom";
import "./ArtistReminderStyles.scss";
import "../Hero/HeroStyles.scss";

import artist_icon from "../../assets/images/karaoke_4796875.svg";

function ArtistReminder() {
  return (
    <section id="reminder">
      <div className="artist-reminder-wrapper">
        <div className="artist-reminder">
          <div className="artist-message">
            <h1>ATTENTION ARTISTS</h1>
            <img src={artist_icon} alt="artist icon" />

            <p>
              Tired of making pennies from streaming? <br /> We’ll help you earn
              more money and connect with your top fans. Learn more about the
              benefits of releasing your music on BnG by clicking the button
              below
            </p>

            <Link to="/artists">
              <button>Never Miss A Drop</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistReminder;
