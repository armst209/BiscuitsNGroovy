import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import AlbumPopup from "../../../AlbumPopup";
import ComponentLoading from "../../../Loading/ComponentLoading";
import AlbumCoverHover from "./AlbumCoverHover";
import "./LibraryStyles.scss";

function Library(props) {
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);
  const token = localStorage.getItem("token");

  // const baseURL =
  //   "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
  const testURL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    //Request for Library
    axios({
      method: "get",
      url: `${testURL}/users`,
      // url: `${baseURL}/releases`,
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
      let releases = res.data;
      // let releases = res.data.releases;
      //Main Function - looping through response, displaying repsonse in "Your Library" & creating individual "AlbumPopup"s
      let showAllAlbumCovers = releases.map((release) => {
        //Toggle to Close AlbumPopUp
        const closeAlbumInfo = () => {
          setAlbumInfo(!albumInfo);
        };
        //Set albumInfo Hook and displays each "album" information inside "Your Library"
        const showHoverInfo = (release) => {
          // console.log(release);
          // console.log("mouse enter");
          const closeHoverInfo = () => {
            console.log("mouse leave");
            setHoverInfo("");
          };
          const showAlbumInfo = (release) => {
            // console.log(release);
            setAlbumInfo(
              <AlbumPopup
                toggle={closeAlbumInfo}
                name={release.name}
                // price={release.price}
                // description={release.description}
                // images={[release.art_url]}
                // songUrl={release.songs}
              />
            );
          };
          setHoverInfo(
            <AlbumCoverHover
              showAlbumInfo={showAlbumInfo}
              release={release}
              closeHoverInfo={closeHoverInfo}
            />
          );
        };

        //Return - what's currently being displayed in the "Your Library" section through Hooks
        return release ? (
          <div
            title="show me"
            onMouseEnter={() => showHoverInfo(release)}
            onMouseLeave={() => setHoverInfo("")}
            className={` ${"view-album-cover"}`}
            key={`${"album-container" + release.id}`}
          >
            <div className="release-image">
              <img src={release.art_url} alt={release.name} />
            </div>
            <div className="release-text">
              <div>{release.name}</div>
              {/* <div>{release.description}</div> */}
              {/* <div>{release.price}</div> */}
            </div>
          </div>
        ) : (
          "Loading..."
        );
      });

      //This Hook displays return/result of main function in "Your Library"
      setAlbumCovers(showAllAlbumCovers);
    };

    const handleLibraryFailure = (err) => {
      console.log(err);
    };
  }, [albumInfo, hoverInfo]);
  return (
    <Suspense fallback={<ComponentLoading />}>
      <div className="library-albums-hover">
        <div className="lib-albums"> {albumCovers}</div>
        <div className="lib-info"> {hoverInfo} </div>
      </div>
      {albumInfo}
    </Suspense>
  );
}

export default Library;
