import { React, useState, useEffect, lazy } from "react";
import ComponentLoading from "../../Loading/ComponentLoading";
import "./FPHomePageStyles.scss";
import Browse from "./Sections/Browse/Browse";
const Library = lazy(() => import("./Sections/Library/Library"));

function FPHomePage(props) {
  console.log(props);
  const [albumReleases] = useState("");
  const [showPopUp, setShowPopup] = useState("");

  return (
    <section id="fp-homepage">
      {showPopUp}
      <div id="gallery"></div>
      <h1>Your Library</h1>

      <div className="library-select">
        {/* Passed prop to close album popup */}
        <Library popUpPassed={setShowPopup} />
      </div>

      <h1>Browse</h1>

      <div className="browse-select">
        {/* Passed prop to close album popup */}
        <Browse popUpPassed={setShowPopup} />
      </div>
    </section>
  );
}

export default FPHomePage;
