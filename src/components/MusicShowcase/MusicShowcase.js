import React from "react";
import LibrarySwiper from "../FanPortal/LibrarySwiper";
// import MusicShowcaseCarousel from "./MusicShowcaseCarousel";
import "./MusicShowcaseStyles.scss";

function MusicShowcase() {
  return (
    <section id="music-showcase">
      <h1>MUSIC SHOWCASE</h1>
      <p>
        Browse our current and upcoming releases. Click on a title for more
        details
      </p>
      <div className="showcase-grid">
        <LibrarySwiper />
      </div>
    </section>
  );
}

export default MusicShowcase;
