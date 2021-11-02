import { useState, useMemo } from "react";
import "./MusicShowcaseStyles.scss";
import ReleaseList from "./ReleaseList/ReleaseList";
import ComponentLoading from "../Loading/ComponentLoading";
import env from "react-dotenv";
import useFetch from "../../customHooks/Fetch/useFetch";
import { ReactComponent as SpotLightYellowLeft } from "../../assets/images/spotlight_outline_left_yellow.svg";
import { ReactComponent as SpotLightYellowRight } from "../../assets/images/spotlight_outline_right_yellow.svg";
import showcase from "../../assets/images/showcase_mobile.webp";

const MusicShowcase = () => {
  //TOKEN
  const token = localStorage.getItem("token");
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${env.BACKEND_URL}/releases`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id="music-showcase">
      {/* ======SVGs====== */}
      <SpotLightYellowLeft className="spotlight-top-left" />
      <SpotLightYellowRight className="spotlight-top-right" />
      {/* ======SVGs====== */}
      <div className="music-showcase-container">
        <div className="content-container">
          <h1>MUSIC SHOWCASE</h1>
          <p className="show-case-p">
            Browse our current and upcoming releases. Click on a title for more
            details
          </p>
          <div className="content-wrapper">
            <div className="showcase-grid-desktop">
              {isLoading && <ComponentLoading />}
              {releaseData && <ReleaseList releaseData={releaseData} />}
              <div>{errorMessage}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-image-container">
        <img className="bottom-image" src={showcase} alt="microphone" />
      </div>
    </section>
  );
};

export default MusicShowcase;
