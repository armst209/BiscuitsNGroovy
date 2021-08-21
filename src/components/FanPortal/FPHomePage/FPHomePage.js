import { React, useState, lazy } from "react";
import "./FPHomePageStyles.scss";
//lazy loading library section
const Library = lazy(() => import("./Sections/Library/Library"));

function FPHomePage(props) {
  console.log(props);
  const [showPopUp, setShowPopup] = useState("");

  return (
    <section id="fp-homepage">
      {showPopUp}
      <div className="library-select">
        {/* Passed prop to close album popup */}
        <Library popUpPassed={setShowPopup} />
      </div>
    </section>
  );
}

export default FPHomePage;
