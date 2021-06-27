import axios from "axios";
import { React, useState, useEffect, lazy } from "react";
import ComponentLoading from "../../Loading/ComponentLoading";
import "./FPHomePageStyles.scss";
const Library = lazy(() => import("./Sections/Library"));

function FPHomePage(props) {
  const [albumReleases, setAlbumReleases] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // const baseURL =
    //   "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
    // const testURL = "https://jsonplaceholder.typicode.com";
    //Request for Browse
    // axios({
    //   method: "get",
    //   // url: `${testURL}/users`,
    //   url: `${baseURL}/releases`,
    //   headers: {
    //     "x-access-token": token,
    //   },
    // })
    //   .then((res) => {
    //     handleBrowseSuccess(res);
    //   })
    //   .catch((err) => {
    //     handleBrowseFailure(err);
    //   });
    // const handleBrowseSuccess = (res) => {
    //   // console.log(res.data);
    //   let releases = res.data.releases;
    //   let showAllReleases = releases.map((release) => {
    //     return release ? (
    //       <div key={release.id}>
    //         {/* <div>
    //           <img src={release.art_url} alt={release.name} />
    //         </div> */}
    //         <div>{release.name}</div>
    //         <div>{release.name}</div>
    //         <div>{release.name}</div>
    //       </div>
    //     ) : (
    //       <div className="loading-animation">
    //         <ComponentLoading />
    //       </div>
    //     );
    //   });
    //   // console.log(showAllReleases);
    //   setAlbumReleases(showAllReleases);
    // };
    // const handleBrowseFailure = (err) => {
    //   console.log(err);
    // };
  }, []);

  return (
    <section id="fp-homepage">
      <div id="gallery"></div>
      <h1>Your Library</h1>

      <div className="library-select">
        <Library />
      </div>

      <h1>Browse</h1>

      <div className="browse-select">{albumReleases}</div>
    </section>
  );
}

export default FPHomePage;
