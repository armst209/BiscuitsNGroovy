// import axios from "axios";
// import { React, Suspense, lazy } from "react";
// const LibrarySwiper = lazy(() => import("../LibrarySwiper"));
import "./FPHomePageStyles.scss";

function FPHomePage() {
  return (
    <section id="fp-homepage">
      <div id="gallery"></div>
      <h1>Your Library</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa similique
        eligendi, eos quasi sed architecto, atque quibusdam aliquam ratione
        officiis ex porro quo at minus fugit distinctio voluptatum veritatis
        iste.
      </p>
      <div className="gallery-select">
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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam id
        provident nesciunt! Earum, sapiente fugit et doloremque necessitatibus
        officiis odio impedit ipsum natus culpa a unde quisquam animi, ad
        dignissimos.
      </p>
      {/* <Suspense>
        <LibrarySwiper />
      </Suspense> */}
    </section>
  );
}

export default FPHomePage;
