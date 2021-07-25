import { React, Suspense, lazy, useState, useEffect } from "react";
import axios from "axios";
import ComponentLoading from "../Loading/Loading";
import ReminderBackground from "../Background/ReminderBackground";
import ReminderBackground2 from "../Background/ReminderBackground2";
import ReminderBackground3 from "../Background/ReminderBackground3";
import ReleasePreview from "../ReleasePreview/ReleasePreview";
import "./MusicShowcaseStyles.scss";
import ex_music_icon from "../../assets/images/love-song2.svg";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";

function MusicShowcase() {
  const [displayReleases, setDisplayReleases] = useState("");
  const [releaseInfo, setReleaseInfo] = useState(false);

  //If statement for users purchased albums if logged in, pass token
  const token = localStorage.getItem("token");
  const baseURL =
    "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
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
        //Set releaseInfo Hook and displays each "release" information inside "Releases" section container
        const showReleaseInfo = (release) => {
          setReleaseInfo(
            <ReleasePreview
              toggleClose={closeReleaseInfo}
              name={release.name}
            />
          );
        };
        return release ? (
          <div
            // onClick={() => showReleaseInfo(release)}
            key={`${"release-container" + release.id}`}
            className="grid-item"
            // tabindex="0"
          >
            <img
              className="grid-image"
              src={release.art_url}
              alt={release.name}
            />
            <div className="release-information">
              <div>{release.description}</div>
              <div>
                <button>BUY NOW</button>
              </div>
            </div>
            <img
              className="ex-music-icon"
              src={ex_music_icon}
              alt="music icon"
            />
          </div>
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
            {/* <div className="release-popup">{releaseInfo}</div>  */}
          </div>
          <div className="showcase-grid-mobile"></div>
        </div>
      </div>
    </section>
  );
}

export default MusicShowcase;
