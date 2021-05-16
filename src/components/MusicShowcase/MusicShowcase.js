import React from "react";
import HeroBackground from "../Background/HeroBackground";
// import spotlight from "../../assets/images/spotlight2rotate.svg";
import LibrarySwiper from "../FanPortal/LibrarySwiper";
import ReminderSection from "../ReminderSection/ReminderSection";

// import MusicShowcaseCarousel from "./MusicShowcaseCarousel";
import "./MusicShowcaseStyles.scss";

function MusicShowcase() {
  return (
    <section id="music-showcase">
      {/* <div className="spot-light">
        <img src={spotlight} alt="spotlight" />
      </div> */}
      <h1>MUSIC SHOWCASE</h1>
      <p>
        Browse our current and upcoming releases. Click on a title for more
        details
      </p>
      <div className="showcase-grid">
        <LibrarySwiper />
      </div>
      <div className="reminder-section">
        <ReminderSection />
      </div>
    </section>
  );
}

export default MusicShowcase;
