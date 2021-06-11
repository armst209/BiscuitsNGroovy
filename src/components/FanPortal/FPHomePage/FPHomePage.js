// import axios from "axios";
// import { React, Suspense, lazy } from "react";
// const LibrarySwiper = lazy(() => import("../LibrarySwiper"));
import "./FPHomePageStyles.scss";

function FPHomePage() {
  return (
    <section id="fp-homepage">
      <div id="gallery"></div>
      <h1>Your Library</h1>

      <div className="library-select">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      {/* <Suspense>
        <LibrarySwiper />
      </Suspense> */}

      <h1>Browse</h1>

      <div className="browse-select">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      {/* <Suspense>
        <LibrarySwiper />
      </Suspense> */}
    </section>
  );
}

export default FPHomePage;
