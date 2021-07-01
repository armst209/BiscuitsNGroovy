import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import ComponentLoading from "../../../../Loading/ComponentLoading";
import AlbumCoverHover from "./AlbumCoverHover/AlbumCoverHover";
import { MDBRipple } from "mdb-react-ui-kit";
import "./LibraryStyles.scss";

function Library(props) {
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);
  const token = localStorage.getItem("token");

  const baseURL =
    "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
  // const testURL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    //Request for Library
    axios({
      method: "get",
      // url: `${testURL}/users`,
      url: `${baseURL}/releases`,
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
      let releases = res.data.releases;
      //Main Function - looping through response, displaying repsonse in "Your Library" & creating individual "AlbumPopup"s
      let showAllAlbumCovers = releases.map((release) => {
        //Toggle to Close AlbumPopUp
        const closeAlbumInfo = () => {
          setAlbumCovers("");
        };
        //Set albumInfo Hook and displays each "album" information inside "Your Library"
        const showHoverInfo = (release) => {
          setHoverInfo(
            <AlbumCoverHover
              closeButton={props.popUpPassed}
              setAlbumInfo={setAlbumInfo}
              albumInfo={albumInfo}
              release={release}
              toggle={closeAlbumInfo}
              showReleasePopUp={props.popUpPassed}
            />
          );
        };

        //Return - what's currently being displayed in the "Your Library" section through Hooks
        return release ? (
          //One entire album/release
          <div key={release.id}>
            <MDBRipple
              style={{ width: "auto", height: "auto" }}
              className="bg-image hover-overlay shadow-1-strong rounded release-container"
              onMouseEnter={() => showHoverInfo(release)}
            >
              <img src={release.art_url} alt={release.name} className="w-100" />
              <a href="#!">
                <div
                  className="mask release-text"
                  style={{
                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                  }}
                >
                  {hoverInfo}
                </div>
              </a>
            </MDBRipple>
            <div>{release.description}</div>
            <div>{release.price}</div>
          </div>
        ) : (
          <ComponentLoading />
        );
      });

      //This Hook displays return/result of main function in "Your Library"
      setAlbumCovers(showAllAlbumCovers);
    };

    const handleLibraryFailure = (err) => {
      console.log(err);
    };
  }, [albumInfo, hoverInfo]);
  //Individual albums/releases are displayed here
  return <Suspense fallback={<ComponentLoading />}>{albumCovers}</Suspense>;
}

export default Library;
