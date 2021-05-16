import React from "react";
import ReminderBackground from "../Background/ReminderBackground";
import ReminderBackground2 from "../Background/ReminderBackground2";
import LibrarySwiper from "../FanPortal/LibrarySwiper";
import ReminderSection from "../ReminderSection/ReminderSection";
import "./MusicShowcaseStyles.scss";

function MusicShowcase() {
  return (
    <section id="music-showcase">
      <ReminderBackground />
      <h1>MUSIC SHOWCASE</h1>
      <p className="show-case-p">
        Browse our current and upcoming releases. <br />
        Click on a title for more details
      </p>
      <div className="showcase-grid">
        <LibrarySwiper />
      </div>
      <div className="reminder-section">
        <ReminderSection />
      </div>
      {/* <ReminderBackground2 /> */}
    </section>
  );
}

export default MusicShowcase;
