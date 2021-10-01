import { React, useState, lazy } from "react";
import "./FPHomePageStyles.scss";
//lazy loading library section
const Library = lazy(() => import("./Sections/Library/Library"));

function FPHomePage(props) {
  const [showPopUp, setShowPopup] = useState("");
  const [showEndDatePopUp, setShowEndDatePopUp] = useState("");
  const [showNFTPopUp, setShowNFTPopUp] = useState("");

  return (
    <section id="fp-homepage">
      {showPopUp}
      {showEndDatePopUp}
      {showNFTPopUp}
      <div className="library-select">
        {/* Passed prop to close album popup */}
        <Library
          popUpPassed={setShowPopup}
          setShowEndDatePopUp={setShowEndDatePopUp}
          setShowNFTPopUp={setShowNFTPopUp}
        />
      </div>
    </section>
  );
}

export default FPHomePage;
