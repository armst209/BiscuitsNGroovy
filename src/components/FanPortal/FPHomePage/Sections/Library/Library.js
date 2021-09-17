import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ComponentLoading from "../../../../Loading/ComponentLoading";
import AlbumCoverHover from "../AlbumCoverHover/AlbumCoverHover";
import "swiper/swiper.scss";
import "./LibraryStyles.scss";
import env from "react-dotenv";

function Library(props) {
  //Hooks
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
  const [noReleases, setNoReleases] = useState("");
  const [libraryLoaded, setLibraryLoaded] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [releaseEndPopup, setReleaseEndPopup] = useState(false);

  //Api call variables
  const token = localStorage.getItem("token");
  const baseURL = env.BACKEND_URL;

  useEffect(() => {
    //Request for Library
    axios({
      method: "get",
      url: `${baseURL}/library`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        handleLibrarySuccess(res);
      })
      .catch((err) => {
        handleLibraryFailure(err);
      });

    const handleLibrarySuccess = (res) => {
      let libraryReleases = res.data.library;
      if (!libraryLoaded) {
        <ComponentLoading />;
      } else {
        setLibraryLoaded(true);
        if (libraryReleases.length === 0) {
          setNoReleases(
            <div className="no-releases-msg">
              <h1>It looks like you have no releases yet...</h1>
              <Link to="/home#music-showcase">
                <button className="">Start Your Collection</button>
              </Link>
            </div>
          );
        }
        //Main Function - looping through response, displaying response in "Your Library" & creating individual "AlbumPopup"s
        let showAllAlbumCovers = libraryReleases.map((release) => {
          //Toggle to Close AlbumPopUp
          const closeAlbumInfo = () => {
            setAlbumCovers("");
          };

          // const handleReleaseWindow = (release) => {
          //   //must get the date time of the newly created date object before you compare them
          //   let currentDate = new Date(Date.now()).getTime();
          //   console.log(currentDate);
          //   const endReleaseDate = new Date(release.end_date).getTime();
          //   console.log(endReleaseDate);
          //   if (currentDate > endReleaseDate) {
          //     console.log("release done");
          //     alert("release not longer available");
          //     setIsDisabled(false);
          //     setReleaseEndPopup(true);
          //   } else {
          //     console.log("release valid");
          //     setIsDisabled(true);
          //   }
          // };

          //Return - what's currently being displayed in the "Your Library" section through Hooks
          return release ? (
            //Hover state for release
            <div
              disabled={isDisabled}
              //  onClick={handleReleaseWindow}
            >
              <figure
                className="hover-img"
                key={`hover-figure + ${release.id}`}
              >
                <img
                  src={release.art_url}
                  alt={release.name}
                  style={{ width: "277px", height: "182px" }}
                />
                <figcaption>
                  <AlbumCoverHover
                    closeButton={props.popUpPassed}
                    setAlbumInfo={setAlbumInfo}
                    albumInfo={albumInfo}
                    release={release}
                    toggle={closeAlbumInfo}
                    showReleasePopUp={props.popUpPassed}
                  />
                </figcaption>
              </figure>
            </div>
          ) : (
            <ComponentLoading />
          );
        });

        //This Hook displays return/result of main function in "Your Library"
        setAlbumCovers(showAllAlbumCovers);
      }
    };

    const handleLibraryFailure = (err) => {
      console.log(err);
    };
  }, [albumInfo, baseURL, props.popUpPassed, token, isDisabled, libraryLoaded]);

  //Individual albums/releases are displayed here
  return (
    <Suspense fallback={<ComponentLoading />}>
      {/* displays when user has releases */}
      {albumCovers}
      {/* displays when user hasn't purchased any releases */}
      {noReleases}
      {releaseEndPopup && <div>Release Ended</div>}
    </Suspense>
  );
}
export default Library;
