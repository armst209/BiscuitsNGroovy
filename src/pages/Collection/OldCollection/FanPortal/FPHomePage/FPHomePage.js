import { memo, useState, lazy } from "react";
import "./FPHomePageStyles.scss";
//lazy loading library section
const NewLibrary = lazy(() => import("./Sections/NewLibrary/NewLibrary"));

const FPHomePage = memo((props) => {
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
        {/* <Library
          popUpPassed={setShowPopup}
          setShowEndDatePopUp={setShowEndDatePopUp}
          setShowNFTPopUp={setShowNFTPopUp}
        /> */}
      </div>
    </section>
  );
});

export default FPHomePage;
