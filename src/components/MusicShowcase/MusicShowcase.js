import { useState } from "react";

// import axios from "axios";
import ComponentLoading from "../Loading/ComponentLoading";
// import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
import { ReactComponent as SpotLightYellowLeft } from "../../assets/images/spotlight_outline_left_yellow.svg";
import { ReactComponent as SpotLightYellowRight } from "../../assets/images/spotlight_outline_right_yellow.svg";

import showcase from "../../assets/images/showcase_mobile.webp";

import env from "react-dotenv";
import ShowcaseList from "./ShowcaseList";
import useAxiosFetch from "../../customHooks/useFetch";

function MusicShowcase(props) {
  //getting token
  const token = localStorage.getItem("token");
  const [releaseInfo, setReleaseInfo] = useState("");
  const [isShown, setIsShown] = useState(false);

  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useAxiosFetch(`${env.BACKEND_URL}/releases`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id="music-showcase">
      <SpotLightYellowLeft className="spotlight-top-left" />
      <SpotLightYellowRight className="spotlight-top-right" />

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
