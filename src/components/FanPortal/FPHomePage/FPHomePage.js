import axios from "axios";
import { React, useState, useEffect } from "react";
import AlbumPopup from "../../AlbumPopup";
import ComponentLoading from "../../Loading/ComponentLoading";
import "./FPHomePageStyles.scss";

function FPHomePage(props) {
  const [albumReleases, setAlbumReleases] = useState("");
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);

  useEffect(() => {
    //Request for Browse
    const token = localStorage.getItem("token");
    const baseURL =
      "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
    // const testURL = "https://jsonplaceholder.typicode.com";

    axios({
      method: "get",
      // url: `${testURL}/users`,
      url: `${baseURL}/releases`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        handleBrowseSuccess(res);
      })
      .catch((err) => {
        handleBrowseFailure(err);
      });

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
      let releases = res.data.releases;
      //Main Function - looping through response, displaying repsonse in "Your Library" & creating individual "AlbumPopup"s
      let showAllAlbumCovers = releases.map((release) => {
        //Toggle to Close AlbumPopUp
        const closeAlbumInfo = () => {
          setAlbumInfo(!albumInfo);
        };
        //Set albumInfo Hook and displays each "album" information inside "Your Library"
        const showAlbumInfo = (release) => {
          console.log(release);
          setAlbumInfo(
            <AlbumPopup
              toggle={closeAlbumInfo}
              name={release.name}
              price={release.price}
              description={release.description}
              images={[release.art_url]}
            />
          );
        };
        //Return - what's currently being displayed in the "Your Library" section through Hooks
        return release ? (
          <div
            onClick={() => showAlbumInfo(release)}
            className={` ${"view-album-cover"}`}
            key={`${"album-container" + release.id}`}
          >
            <div>
              <img src={release.art_url} alt={release.name} />
              <div>{release.name}</div>
              <div>{release.description}</div>
              <div>{release.price}</div>
            </div>
          </div>
        ) : (
          <div className="loading-animation">
            <ComponentLoading />
          </div>
        );
      });

      //This Hook displays return/result of main function in "Your Library"
      setAlbumCovers(showAllAlbumCovers);
    };

    const handleLibraryFailure = (err) => {
      console.log(err);
    };

    const handleBrowseSuccess = (res) => {
      let releases = res.data;
      let showAllReleases = releases.map((release) => {
        return release ? (
          <div key={release.id}>
            {/* <div>
              <img src={release.art_url} alt={release.name} />
            </div> */}
            <div>{release.name}</div>
            <div>{release.name}</div>
            <div>{release.name}</div>
          </div>
        ) : (
          <div className="loading-animation">
            <ComponentLoading />
          </div>
        );
      });
      // console.log(showAllReleases);
      setAlbumReleases(showAllReleases);
    };
    const handleBrowseFailure = (err) => {
      console.log(err);
    };
  }, [albumInfo]);

  return (
    <section id="fp-homepage">
      <div id="gallery"></div>
      <h1>Your Library</h1>

      <div className="library-select">{albumCovers}</div>

      <h1>Browse</h1>

      <div className="browse-select">{albumReleases}</div>
      <div>{albumInfo}</div>
    </section>
  );
}

export default FPHomePage;
