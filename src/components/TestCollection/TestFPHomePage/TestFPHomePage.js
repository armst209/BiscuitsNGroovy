import { React, useState, lazy } from "react";
import "./TestFPHomePageStyles.scss";
//lazy loading library section
const NewLibrary = lazy(() =>
  import("./TestSections/TestNewLibrary/TestNewLibrary")
);

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
        <NewLibrary
          popUpPassed={setShowPopup}
          setShowEndDatePopUp={setShowEndDatePopUp}
          setShowNFTPopUp={setShowNFTPopUp}
          {...props}
        />
      </div>
    </section>
  );
}

export default FPHomePage;
