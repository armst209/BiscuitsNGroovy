// import axios from "axios";
import { React, Suspense, lazy } from "react";
const LibrarySwiper = lazy(() => import("../LibrarySwiper"));

function FPHomePage() {
  return (
    <section id="fp-homepage">
      <div id="gallery"></div>
      <h1>Your Library</h1>
      <Suspense>
        <LibrarySwiper />
      </Suspense>

      <h1>Browse</h1>
      <Suspense>
        <LibrarySwiper />
      </Suspense>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa similique
        eligendi, eos quasi sed architecto, atque quibusdam aliquam ratione
        officiis ex porro quo at minus fugit distinctio voluptatum veritatis
        iste.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam id
        provident nesciunt! Earum, sapiente fugit et doloremque necessitatibus
        officiis odio impedit ipsum natus culpa a unde quisquam animi, ad
        dignissimos.
      </p>
    </section>
  );
}

export default FPHomePage;
