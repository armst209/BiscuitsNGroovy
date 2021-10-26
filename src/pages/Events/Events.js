import "./EventsStyles.scss";
import zevy_logo from "../../assets/images/event-images/zevylogo.png";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import EventTimer from "./EventTimer";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import EventsAbout from "./EventsAbout";
import EventsSocials from "./EventsSocials";

function Events() {
  const dateToEvent = new Date("November 6, 2021 00:00:00").getTime();

  return (
    <section id="events">
      <div className="events-title">
        <h1>
          <RecordVinyl width="50px" />
          <div>EVENTS</div>
        </h1>
      </div>
      <div className="events-content">
        <EventTimer expiryTimestamp={dateToEvent} />
        <div className="single-event">
          <div className="single-event-wrapper">
            <div className="single-event-content">
              <h2>Biscuits n Groovy presents:</h2>
              <div className="single-event-header">
                <img
                  className="single-event-logo"
                  src={zevy_logo}
                  alt="zevy logo"
                />
              </div>

              <div className="single-event-info">
                <ul>
                  <li>
                    <span>DATE: </span> 11/6/2021
                  </li>
                  <li>
                    <span>TIME: </span> Concert will begin 3 hours prior to
                    kickoff
                  </li>
                  <li>
                    <span>LOCATION: </span>1001 Oakland Ave, Ann Arbor, MI
                  </li>

                  <li>Special Sweepstakes coming soon</li>
                  <li> Description:</li>
                </ul>
              </div>

              <div className="artist-link">
                <HashLink to="/home/#music-showcase">
                  <button>VIP Tickets & Exclusive Release</button>
                </HashLink>
              </div>
            </div>
            <div className="events-map-socials-wrapper">
              <div className="single-event-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.374961781665!2d-83.7398452847149!3d42.27051864874446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae48ef0ac2a1%3A0x466cdf5a2faa3bb8!2s1001%20Oakland%20Ave%2C%20Ann%20Arbor%2C%20MI%2048104!5e0!3m2!1sen!2sus!4v1634905761283!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
              <EventsSocials />
            </div>
          </div>

          <div className="single-event-bottom-links"></div>
        </div>
      </div>

      <div className="events-information-section">
        <div className="events-learn-more">
          <EventsAbout />
        </div>
        <div className="subscribe-div">
          <SubscribeSection />
        </div>
      </div>
    </section>
  );
}

export default Events;
