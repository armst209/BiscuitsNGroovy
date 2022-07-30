import "./EventsStyles.scss";
import zevy_event from "../../assets/images/event-images/zevyevent.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import EventTimer from "./EventTimer";

import EventsAbout from "./EventsAbout";
import EventsSocials from "./EventsSocials";
import NewsletterFormContainer from "../../common/components/MailchimpForms/NewsLetterSubscribe/NewsletterFormContainer";
import FixedNavigationSpacer from "../../common/components/FixedNavigationSpacer/FixedNavigationSpacer";

function Events() {
  const dateToEvent = new Date("November 6, 2021 00:00:00").getTime();

  return (
    <>
      <FixedNavigationSpacer />
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
            <EventTimer expiryTimestamp={dateToEvent} />
            <div className="single-event-divider-wrapper">
              <hr className="single-event-divider"></hr>
            </div>

            <div className="single-event-wrapper">
              <div className="single-event-content">
                <div className="single-event-info">
                  <div className="single-event-description">
                    <p>
                      Biscuits n Groovy brings you ZEVY, one of the brightest young EDM DJs in the
                      game, at 1001 Oakland Ave in the heart of Ann Arbor on November 6, 2021 for an
                      exclusive tailgate concert. The show will begin promptly 3 hours prior to
                      kickoff. Space is limited so fans will be let in on a first come first served
                      bases. However, you may reserve your spot by grabbing a VIP ticket for just
                      $10 on bngroovy.com and presenting it at the door.
                    </p>
                    <p>
                      VIP access tickets ensure you get a spot at the show and get you exclusive
                      perks including:
                    </p>
                    <ul>
                      <li>Guaranteed admission to the event</li>
                      <li>A raffle ticket to win a BnG bucket hat signed by ZEVY</li>
                      <li>An exclusive audio snippet of ZEVY’s brand new single, “Green Eyes”</li>
                      <li>A free copy of “Green Eyes” when it drops on November 12th</li>
                      <li className="indented-li">
                        Each BnG release includes exclusive streaming access and a collectible album
                        cover. Read more <Link to="/faq">here</Link>.
                      </li>
                    </ul>
                    <p>
                      Once you get your ticket, Tweet at us using the hashtag
                      <strong> #BnGpresentsZEVY</strong> for a chance to win some exclusive merch
                      and be featured on our socials!
                    </p>
                  </div>
                  <div className="single-event-divider-wrapper second-divider">
                    <hr className="single-event-divider"></hr>
                  </div>
                  <ul>
                    <li>
                      <span>DATE: </span> 11/6/2021
                    </li>
                    <li>
                      <span>TIME: </span> Concert will begin 3 hours prior to kickoff
                    </li>
                    <li>
                      <span>LOCATION: </span>1001 Oakland Ave, Ann Arbor, MI
                    </li>
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
                    loading="lazy"></iframe>
                </div>
                <div className="single-event-divider-wrapper">
                  <hr className="single-event-divider"></hr>
                </div>
                <EventsSocials name={"ZEVY"} />
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
            <NewsletterFormContainer />
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
