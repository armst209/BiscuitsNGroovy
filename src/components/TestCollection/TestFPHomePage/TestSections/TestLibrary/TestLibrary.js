import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
import ComponentLoading from "../../../../Loading/ComponentLoading";
import AlbumCoverHover from "../AlbumCoverHover/AlbumCoverHover";
import NFTHover from "../TestNewLibrary/TestReleaseList/TestReleaseListViews/HoverState/NFT/TestNFTHover";
import "./LibraryStyles.scss";
import env from "react-dotenv";

function Library(props) {
  //Hooks
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
  const [noReleases, setNoReleases] = useState("");
  const [libraryLoaded, setLibraryLoaded] = useState(true);
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
      //if there are no releases in the users library, its shows the setNoReleases message
      if (!libraryLoaded) {
        <ComponentLoading />;
      } else {
        setLibraryLoaded(true);
        if (libraryReleases.length === 0) {
          setNoReleases(
            <div className="no-releases-msg">
              <h1>It looks like you have no releases yet...</h1>
              <HashLink smooth to="/home#music-showcase">
                <button className="">Start Your Collection</button>
              </HashLink>
            </div>
          );
        }
        //Main Function for displaying releases - looping through response, displaying response in "Library"
        //showAllAlbum Covers includes the following components:
        //-----------AlbumCoverHover
        //-----------NFTPopup
        let showAllAlbumCovers = libraryReleases.map((release) => {
          //setting release name to use in NFTPopup so when a release is expired, the correct artist name can be displayed in the popup
          // setReleaseInformation(release.name);

          //Toggle to Close AlbumPopUp
          const closeAlbumInfo = () => {
            setAlbumCovers("");
          };
          //if release is expired (IsExpired boolen on release object) it just shows nft element, if not, full release and access to music player is allowed
          if (release.isExpired === false) {
            return (
              //Return - what's currently being displayed in the "Library" section through Hooks
              //figure and figcaption utilizes npm package
              <figure
                className="hover-img"
                key={`hover-figure-key-for-${release.title}`}
              >
                <img
                  src={release.art_url}
                  alt={release.name}
                  key={`hover-image-key-for-${release.title}`}
                />
                <figcaption key={`hover-figcaption-key-for-${release.title}`}>
                  {/* Hover state for release */}
                  <AlbumCoverHover
                    key={`album-cover-key-for-${release.title}`}
                    closeButton={props.popUpPassed}
                    setAlbumInfo={setAlbumInfo}
                    albumInfo={albumInfo}
                    release={release} //entire release being passed in as a prop
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
              //figure and figcaption utilizes npm package
              <figure
                className="hover-img"
                key={`nft-hover-figure-key-for-${release.title}`}
              >
                <img
                  src={release.art_url}
                  alt={release.name}
                  key={`nft-hover-image-key-for-${release.title}`}
                />
                <figcaption
                  key={`nft-hover-figcaption-key-for-${release.title}`}
                >
                  {/* Hover state for viewing nft */}
                  <NFTHover
                    key={`nft-hover-key-for-${release.title}`}
                    release={release} //entire release being passed in as a prop
                    setShowNFTPopUp={props.setShowNFTPopUp}
                    setShowEndDatePopUp={props.setShowEndDatePopUp}
                  />
                </figcaption>
              </figure>
            );
          }
        });

        //This useState hook displays return/result of main function in "Library"
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
