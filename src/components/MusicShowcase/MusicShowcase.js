import { React, Suspense, lazy, useState } from "react";
import ReminderBackground from "../Background/ReminderBackground";
import ReminderBackground2 from "../Background/ReminderBackground2";
import ReminderBackground3 from "../Background/ReminderBackground3";
import ReleaseCalendar from "../ReleaseCalendar/ReleaseCalendar";
import "./MusicShowcaseStyles.scss";
const LibrarySwiper = lazy(() => import("../FanPortal/LibrarySwiper"));

//Promise
//release
//loop through

function MusicShowcase() {
  const [popUp, setPopUp] = useState(false);

  const showPopUp = () => {};
  return (
    <section id="music-showcase">
      <ReminderBackground2 />
      <ReminderBackground3 />
      <ReminderBackground />

      <div className="music-showcase-container">
        <div className="content-container">
          <h1>RELEASES</h1>
          <p className="show-case-p">
            Browse our current and upcoming releases. <br />
            Click on a title for more details
          </p>
          <div className="showcase-grid-desktop">
            <div>
              <ReleaseCalendar />
            </div>
            <div className="albums" onClick={showPopUp}>
              1
            </div>
            <div className="albums">2</div>
            <div className="albums">3</div>
            <div className="albums">4</div>
            <div className="albums">5</div>
            <div className="albums">6</div>
            <div className="albums">7</div>
            <div className="albums">8</div>
            <div className="albums">9</div>
            <div className="albums">10</div>
          </div>
          <div className="showcase-grid-mobile">
            <Suspense>
              <LibrarySwiper />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicShowcase;
