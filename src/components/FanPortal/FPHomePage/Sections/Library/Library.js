import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ComponentLoading from "../../../../Loading/ComponentLoading";
import AlbumCoverHover from "../AlbumCoverHover/AlbumCoverHover";
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "./LibraryStyles.scss";
SwiperCore.use(Navigation, Pagination);

function Library(props) {
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
  const [noReleases, setNoReleases] = useState("");
  // const [hoverInfo, setHoverInfo] = useState("");
  const token = localStorage.getItem("token");

  const baseURL =
    "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
  // const testURL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    //Request for Library
    axios({
      method: "get",
      // url: `${testURL}/users`,
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
      // let releases = res.data;
      console.log(res.data.library);
      let libraryReleases = res.data.library;
      if (libraryReleases.length == 0) {
        setNoReleases(
          <div className="no-releases-msg">
            <h1>It looks like you have no releases yet...</h1>
            <Link to="/home#music-showcase">
              <button>Start Your Collection</button>
            </Link>
          </div>
        );
      } else {
        //Main Function - looping through response, displaying repsonse in "Your Library" & creating individual "AlbumPopup"s
        let showAllAlbumCovers = libraryReleases.map((release) => {
          //Toggle to Close AlbumPopUp
          const closeAlbumInfo = () => {
            setAlbumCovers("");
          };

          //Return - what's currently being displayed in the "Your Library" section through Hooks
          return release ? (
            <figure class="hover-img">
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
  }, [albumInfo]);

  //Individual albums/releases are displayed here
  return (
    <Suspense fallback={<ComponentLoading />}>
      {albumCovers}
      {noReleases}
    </Suspense>
  );
}
export default Library;
