import { memo, useState, lazy, Suspense } from "react";
import ComponentLoading from "../../../../../components/Loading/Component/ComponentLoading";
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
        <Suspense fallback={<ComponentLoading />}>
          <NewLibrary
            popUpPassed={setShowPopup}
            setShowEndDatePopUp={setShowEndDatePopUp}
            setShowNFTPopUp={setShowNFTPopUp}
            {...props}
          />
        </Suspense>

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
