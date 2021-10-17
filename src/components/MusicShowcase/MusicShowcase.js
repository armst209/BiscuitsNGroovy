import { React, Suspense, useState, useEffect } from "react";

import axios from "axios";
import ComponentLoading from "../Loading/ComponentLoading";
// import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";
import showcase from "../../assets/images/showcase_mobile.webp";
import env from "react-dotenv";
import ShowcaseList from "./ShowcaseList";

function MusicShowcase(props) {
  // const [displayReleases, setDisplayReleases] = useState("");
  const [releaseInfo, setReleaseInfo] = useState("");
  const [isShown, setIsShown] = useState(false);
  // const [haveAllReleases, setHaveAllReleases] = useState("");
  // const [releasesLoaded, setReleasesLoaded] = useState(false);
  const [showcaseReleases, setShowcaseReleases] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios({
      method: "get",
      url: `${env.BACKEND_URL}/releases`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        setShowcaseReleases(res.data.releases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //If statement for users purchased albums if logged in, pass token

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
              {/* {releasesLoaded ? (
                <Suspense fallback={<ComponentLoading />}>
                  {displayReleases}
                  {/* appears if user has purchased all current releases */}
              {/* {haveAllReleases} */}
              {/* </Suspense>
              ) : (
                <ComponentLoading /> */}
              {/* )}  */}
              <Suspense fallback={<ComponentLoading />}>
                {showcaseReleases !== null && showcaseReleases.length === 0
                  ? "Nothing to see here. Check back soon for our next drop!"
                  : showcaseReleases && (
                      <ShowcaseList
                        setReleaseInfo={setReleaseInfo}
                        releaseInfo={releaseInfo}
                        showcaseReleases={showcaseReleases}
                        isShown={isShown}
                        setIsShown={setIsShown}
                        {...props}
                      />
                    )}
              </Suspense>
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
