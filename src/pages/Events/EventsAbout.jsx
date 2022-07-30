import { Link } from "react-router-dom";

import "./EventsAboutStyles.scss";
import { ReactComponent as ArtistIcon } from "../../assets/images/speaker_yellow.svg";

function EventsAbout() {
  return (
    <section id="event-about">
      <div className="event-about-reminder-wrapper">
        <div className="event-about-reminder">
          <div className="event-about-message">
            <div className="event-about-header">
              <ArtistIcon />
              <h1>LEARN MORE ABOUT BNG </h1>
              <ArtistIcon className="right-speaker" />
            </div>

            <Link to="/about">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsAbout;
