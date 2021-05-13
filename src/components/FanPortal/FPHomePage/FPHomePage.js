// import axios from "axios";
import React from "react";
import FPNavbar from "../FPNavbar/FPNavbar";
import LibrarySwiper from "../LibrarySwiper";

function FPHomePage() {
  return (
    <div>
      <FPNavbar />
      <div id="gallery"></div>
      <h1>Your Library</h1>
      <LibrarySwiper />
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
    </div>
  );
}

export default FPHomePage;
