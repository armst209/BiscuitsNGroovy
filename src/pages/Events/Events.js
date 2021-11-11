import { useState } from "react";
import "./EventsStyles.scss";
import zevy_event from "../../assets/images/event-images/zevyevent.webp";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import EventTimer from "./EventTimer";
import SubscribeSection from "../../components/Subscribe/SubscribeSection";
import EventsAbout from "./EventsAbout";
import EventsSocials from "./EventsSocials";

function Events() {
  const [showTicketInformation, setShowTicketInformation] = useState(false);
  const dateToEvent = new Date("November 6, 2021 16:00:00").getTime();

  return (
    <section id="events">
      <div className="events-title">
        <h1>
          <RecordVinyl width="50px" />
          <div>EVENTS</div>
        </h1>
      </div>
      <div className="events-content">
        <div className="single-event">
          <div className="single-event-flyer">
            <img src={zevy_event} alt="zevy event flyer" />
          </div>
          <EventTimer
            expiryTimestamp={dateToEvent}
            setShowTicketInformation={setShowTicketInformation}
          />
          <EventsSocials name={"ZEVY"} />
          <div className="single-event-divider-wrapper">
            <hr className="single-event-divider"></hr>
          </div>

          <div className="single-event-wrapper">
            <div className="single-event-content">
              <div className="single-event-info">
                <div className="single-event-description"></div>
                <div className="single-event-divider-wrapper second-divider">
                  <hr className="single-event-divider"></hr>
                </div>
              </div>
              {showTicketInformation && (
                <div className="artist-link">
                  <HashLink to="/home/#music-showcase">
                    <button>Get My VIP Ticket</button>
                  </HashLink>
                  <p className="artist-link-footer">
                    Limited to 1 ticket per customer. You will be prompted to
                    create a BnG account in order to claim your ticket, which is
                    backed by an{" "}
                    <HashLink to="/faq#nft-scroll-purchase">
                      eco-friendly NFT
                    </HashLink>
                    .
                  </p>
                </div>
              )}
            </div>
            <div className="single-event-divider-wrapper third-divider">
              <hr className="single-event-divider"></hr>
            </div>
            <div className="events-map-socials-wrapper">
              {/* <div className="single-event-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.3378837289088!2d-83.7381906490822!3d42.2713102485924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae48b3791afd%3A0xf30cd50eaff6f225!2s820%20E%20University%20Ave%2C%20Ann%20Arbor%2C%20MI%2048104!5e0!3m2!1sen!2sus!4v1636069638204!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div> */}
              {/* <div className="single-event-divider-wrapper">
                <hr className="single-event-divider"></hr>
              </div> */}
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
