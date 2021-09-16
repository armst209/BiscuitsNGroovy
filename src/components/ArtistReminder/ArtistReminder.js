import React from "react";
import { Link } from "react-router-dom";
import "./ArtistReminderStyles.scss";
import "../Hero/HeroStyles.scss";

import artist_icon from "../../assets/images/speaker_yellow.svg";

function ArtistReminder() {
  return (
    <section id="reminder">
      <div className="artist-reminder-wrapper">
        <div className="artist-reminder">
          <div className="artist-message">
            <div className="artist-header">
              <img src={artist_icon} alt="artist icon" />
              <h1>ATTENTION ARTISTS</h1>
              <img
                className="right-speaker"
                src={artist_icon}
                alt="artist icon"
              />
            </div>

            <div className="tired-container">
              <div className="tired-header">
                TIRED OF MAKING PENNIES FROM STREAMING?
              </div>
              <div className="tired-message">
                We’ll help you earn more money and connect with your top fans.
                Learn more about the benefits of releasing your music on BnG
              </div>
            </div>

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
