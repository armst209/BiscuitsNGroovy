import { React, Suspense, useState, useEffect } from "react";
import axios from "axios";
import ComponentLoading from "../Loading/Loading";
// import ReminderBackground from "../Background/ReminderBackground";
// import ReminderBackground2 from "../Background/ReminderBackground2";
// import ReminderBackground3 from "../Background/ReminderBackground3";
import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
// import ex_music_icon from "../../assets/images/love-song2.svg";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";
import ReactHover from "react-hover";
import { CSSTransition } from "react-transition-group";
import { Trigger } from "react-hover/dist/ReactHover";
import Hover from "react-hover/dist/lib/Hover";
import env from "react-dotenv";

function MusicShowcase(props) {
  console.log(props);

  const [displayReleases, setDisplayReleases] = useState("");
  const [releaseInfo, setReleaseInfo] = useState("");
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

  //If statement for users purchased albums if logged in, pass token
  const token = localStorage.getItem("token");
  const baseURL =
    env.BACKEND_URL;
  // const testURL = "https://jsonplaceholder.typicode.com";
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
        const releaseHover = () => {};
        //Set releaseInfo Hook and displays each "release" information inside "Releases" section container
        const showReleaseInfo = (release) => {
          setReleaseInfo(
            <ReleasePreview
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
  }, [releaseInfo, token]);

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
      {/* <ReminderBackground2 />
      <ReminderBackground3 />
      <ReminderBackground /> */}

      <div className="music-showcase-container">
        <div className="content-container">
          <h1>RELEASES</h1>
          <p className="show-case-p">
            Browse our current and upcoming releases. <br />
            Click on a title for more details
          </p>
          <div className="showcase-grid-desktop">
            {/* <ReleaseCalendar /> */}
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
