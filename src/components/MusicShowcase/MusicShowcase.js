import { useState } from "react";

// import axios from "axios";
import ComponentLoading from "../Loading/ComponentLoading";
// import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";
import showcase from "../../assets/images/showcase_mobile.webp";

import env from "react-dotenv";
import ShowcaseList from "./ShowcaseList";
import useAxiosFetch from "../../customHooks/useAxiosFetch";
// import useAxiosFetch from "../../customHooks/useAxiosFetch";

function MusicShowcase(props) {
  //getting token
  const token = localStorage.getItem("token");
  const [releaseInfo, setReleaseInfo] = useState("");
  const [isShown, setIsShown] = useState(false);

  const {
    responseData: releaseData,
    errorMessage,
    isLoading,
  } = useAxiosFetch("get", `${env.BACKEND_URL}/releases`, null, {
    "x-access-token": token,
  });

  return (
    <section id="music-showcase">
      <img
        className="spotlight-top-left"
        src={spotlight_yellow_left}
        alt="spotlight icon"
      />
      <img
        className="spotlight-top-right"
        src={spotlight_yellow_right}
        alt="spotlight icon"
      />

      <div className="music-showcase-container">
        <div className="content-container">
          <h1>MUSIC SHOWCASE</h1>
          <p className="show-case-p">
            Browse our current and upcoming releases. Click on a title for more
            details
          </p>
          <div className="content-wrapper">
            <div className="showcase-image"></div>

            <div className="showcase-grid-desktop">
              {isLoading && <ComponentLoading />}
              {releaseData && (
                <ShowcaseList
                  setReleaseInfo={setReleaseInfo}
                  releaseInfo={releaseInfo}
                  releaseData={releaseData}
                  isShown={isShown}
                  setIsShown={setIsShown}
                  {...props}
                />
              )}
              <div>{errorMessage}</div>
            </div>
          </div>
        </div>
      </div>
      {releaseInfo}
      <div className="bottom-image-container">
        <img className="bottom-image" src={showcase} alt="" />
      </div>
    </section>
  );
}

export default MusicShowcase;
