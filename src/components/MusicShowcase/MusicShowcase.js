import { React, Suspense, useState, useEffect } from "react";

import axios from "axios";
import ComponentLoading from "../Loading/ComponentLoading";
import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";
import showcase from "../../assets/images/showcase_mobile.webp";
import env from "react-dotenv";

function MusicShowcase(props) {
  const [displayReleases, setDisplayReleases] = useState("");
  const [releaseInfo, setReleaseInfo] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [haveAllReleases, setHaveAllReleases] = useState("");
  const [releasesLoaded, setReleasesLoaded] = useState(false);

  //If statement for users purchased albums if logged in, pass token
  const token = localStorage.getItem("token");
  const baseURL = env.BACKEND_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${baseURL}/releases`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });

    const handleSuccess = (res) => {
      const releases = res.data.releases;

      setReleasesLoaded(true);
      //checking whether user has purchased all current releases
      releases.length === 0
        ? setHaveAllReleases(
            "Nothing to see here. Check back soon for our next drop!"
          )
        : setHaveAllReleases(" ");

      // Main Function - looping through response, displaying response in Homepage Releases section & creating individual "ReleasePreview"s
      let displayAllReleases = releases.map((release) => {
        //Toggle to Close ReleasePreview
        const closeReleaseInfo = () => {
          setReleaseInfo(!releaseInfo);
        };

        //Set releaseInfo Hook and displays each "release" information inside "Releases" section container
        const showReleaseInfo = (release) => {
          setReleaseInfo(
            <ReleasePreview
              key={`release-preview ${release.id}`}
              toggleClose={closeReleaseInfo}
              release={release}
              //props passed in for signup pop up, if user is not logged in and tries to purchase a release
              signUpPopup={props.signUpPopup}
              showSignUpPopup={props.showSignUpPopup}
              stripeLoader={props.stripeLoader}
              setStripeLoader={props.setStripeLoader}
            />
          );
        };

        return release ? (
          <>
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              onClick={() => showReleaseInfo(release)}
              key={`${"release-container" + release.id}`}
              className="grid-item"
            >
              <img
                className="grid-image"
                src={release.art_url}
                alt={release.name}
                key={`${"image-key" + release.id}`}
              />
            </div>
          </>
        ) : (
          <div className="loading-animation">
            <ComponentLoading />
          </div>
        );
      });
      //This Hook displays return/result of main function in "Releases"
      setDisplayReleases(displayAllReleases);
    };
    const handleFailure = (err) => {
      console.log(err);
    };
  }, [
    releaseInfo,
    token,
    baseURL,
    props.signUpPopUpNoToken,
    props.stripeLoaderFromMS,
    isShown,
    setIsShown,
    props.stripeLoader,
    props.showSignUpPopup,
    props.signUpPopup,
    props.setStripeLoader,
  ]);

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
              {releasesLoaded ? (
                <Suspense fallback={<ComponentLoading />}>
                  {displayReleases}
                  {/* appears if user has purchased all current releases */}
                  {haveAllReleases}
                </Suspense>
              ) : (
                <ComponentLoading />
              )}
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
