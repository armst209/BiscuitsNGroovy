import React from "react";
import { Link } from "react-router-dom";
import "./ArtistReminderStyles.scss";
import "../Hero/HeroStyles.scss";
import spotlight from "../../assets/images/spotlight2.png";
import artist_icon from "../../assets/images/karaoke_4796875.svg";
import spotlight_reverse from "../../assets/images/spotlight2_reverse.png";
import artist from "../../assets/images/artist-turntables.jpg";
// import spotlight_middle from "../../assets/images/idea.png";

function ArtistReminder() {
  return (
    <section id="reminder">
      <div className="artist-reminder-wrapper">
        <div className="artist-reminder">
          <div className="artist-message">
            <h1>ATTENTION ARTISTS</h1>
            <img src={artist_icon} alt="artist icon" />

            <p>
              Tired of earning pennies from streaming? We’ll help you earn more
              money and connect with your top fans. Read more about the benefits
              of releasing your music on BnG by clicking the button below:
            </p>

            <Link to="/artists">
              <button>For Artists</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistReminder;
