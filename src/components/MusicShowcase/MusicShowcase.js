import { React, Suspense, lazy } from "react";
import ReminderBackground from "../Background/ReminderBackground";
import ReminderSection from "../ReminderSection/ReminderSection";
import "./MusicShowcaseStyles.scss";
const LibrarySwiper = lazy(() => import("../FanPortal/LibrarySwiper"));

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
        <Suspense>
          <LibrarySwiper />
        </Suspense>
      </div>
      <div className="reminder-section">
        <ReminderSection />
      </div>
      {/* <ReminderBackground2 /> */}
    </section>
  );
}

export default MusicShowcase;
