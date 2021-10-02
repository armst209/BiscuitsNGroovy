import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ComponentLoading from "../../../../Loading/ComponentLoading";
import AlbumCoverHover from "../AlbumCoverHover/AlbumCoverHover";
import NFTHover from "../NFTView/NFTHover";
import NFTPopup from "../NFTView/NFTPopup";
import ExpiredPopup from "../ExpiredPopup/ExpiredPopup";
import "./LibraryStyles.scss";
import env from "react-dotenv";

function Library(props) {
  //Hooks
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
  const [noReleases, setNoReleases] = useState("");
  const [libraryLoaded, setLibraryLoaded] = useState(true);
  const [releaseInformation, setReleaseInformation] = useState("");
  const [expiredPopupCounter, setExpiredPopupCounter] = useState(0);

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
          console.log(release);
          setReleaseInformation(release.name);

          //Toggle to Close AlbumPopUp
          const closeAlbumInfo = () => {
            setAlbumCovers("");
          };
          //if release is disabled it just shows nft, if not full release and access to music player is allowed -
          if (release.isExpired === false) {
            return (
              //Return - what's currently being displayed in the "Your Library" section through Hooks

              <figure className="hover-img" key={`hover-figure-${release.id}`}>
                <img src={release.art_url} alt={release.name} />
                <figcaption>
                  {/* Hover state for release */}
                  <AlbumCoverHover
                    closeButton={props.popUpPassed}
                    setAlbumInfo={setAlbumInfo}
                    albumInfo={albumInfo}
                    release={release}
                    toggle={closeAlbumInfo}
                    showReleasePopUp={props.popUpPassed}
                    expiredPopupCounter={expiredPopupCounter}
                    setExpiredPopupCounter={setExpiredPopupCounter}
                  />
                </figcaption>
              </figure>
            );
          } else {
            return (
              //only for hover, does not pass in props or show popup on click like AlbumCoverHover
              <figure className="hover-img" key={`nft ${release.id}`}>
                <img src={release.art_url} alt={release.name} />
                <figcaption>
                  {/* Hover state for viewing nft */}
                  <NFTHover
                    release={release}
                    setShowNFTPopUp={props.setShowNFTPopUp}
                    setShowEndDatePopUp={props.setShowEndDatePopUp}
                  />
                </figcaption>
              </figure>
            );
          }
        });

        //This Hook displays return/result of main function in "Your Library"
        setAlbumCovers(showAllAlbumCovers);
      }
    };

    const handleLibraryFailure = (err) => {
      console.log(err);
    };
  }, [albumInfo, baseURL, props.popUpPassed, token, libraryLoaded]);

  //Individual albums/releases are displayed here
  return (
    <Suspense fallback={<ComponentLoading />}>
      {/* displays when user has releases */}
      {albumCovers}
      {/* displays when user hasn't purchased any releases */}
      {noReleases}
    </Suspense>
  );
}
export default Library;
