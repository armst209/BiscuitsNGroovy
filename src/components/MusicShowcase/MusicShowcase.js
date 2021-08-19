import { React, Suspense, useState, useEffect } from "react";
import axios from "axios";
import ComponentLoading from "../Loading/Loading";
import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";
import env from "react-dotenv";

function MusicShowcase(props) {
  // console.log(props);
  const [displayReleases, setDisplayReleases] = useState("");
  const [releaseInfo, setReleaseInfo] = useState("");
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

  //If statement for users purchased albums if logged in, pass token
  const token = localStorage.getItem("token");
  const baseURL = env.BACKEND_URL;

  useEffect(() => {
    axios({
      method: "get",
      // url: `${testURL}/users`,
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
      console.log(res.data.releases);
      let releases = res.data.releases;
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
              name={release.name}
              albumCover={release.art_url}
              description={release.description}
              id={release.id}
              price={release.price}
              no_token_pop={props.signUpPopUpNoToken}
              stripeLoaderFromRP={props.stripeLoaderFromMS}
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
              />
              <div className="release-information">
                <div>View Release</div>
              </div>
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
          <div className="showcase-grid-desktop">
            <Suspense fallback={<ComponentLoading />}>
              {displayReleases}
            </Suspense>
          </div>
          <div className="showcase-grid-mobile"></div>
        </div>
      </div>
      {releaseInfo}
    </section>
  );
}

export default MusicShowcase;
