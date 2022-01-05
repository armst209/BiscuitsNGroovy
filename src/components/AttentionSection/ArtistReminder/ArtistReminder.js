import { Link } from "react-router-dom";
import "./ArtistReminderStyles.scss";
import { ReactComponent as ArtistIcon } from "../../../assets/images/speaker_yellow.svg";
//CSS uses BEM
const ArtistReminder = () => {
  return (
    <section id="artist-reminder">
      <div className="artist-reminder__wrapper">
        <div className="artist-reminder__inner-wrapper">
          <div className="artist-reminder__message">
            <div className="artist-reminder__header">
              <ArtistIcon className="artist-reminder__img" />
              <h1 className="artist-reminder__h1">ATTENTION ARTISTS</h1>
              <ArtistIcon className="artist-reminder__img artist-reminder--right-speaker" />
            </div>

            <div className="artist-reminder__tired-container">
              <div className="artist-reminder__tired-header">
                TIRED OF MAKING PENNIES FROM STREAMING?
              </div>
              <div className="artist-reminder__tired-message">
                We’ll help you earn more money and connect with your top fans.
                Learn more about the benefits of releasing your music on BnG
              </div>
            </div>

            <Link className="artist-reminder__link" to="/artists">
              <button>For Artists</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistReminder;
