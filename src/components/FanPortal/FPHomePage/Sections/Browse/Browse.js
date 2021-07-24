import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import ComponentLoading from "../../../../Loading/Loading";
import AlbumCoverHover from "../AlbumCoverHover/AlbumCoverHover";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "./BrowseStyles.scss";
SwiperCore.use(Navigation, Pagination);

function Browse(props) {
  const [albumCovers, setAlbumCovers] = useState("");
  const [albumInfo, setAlbumInfo] = useState(false);
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

        //Return - what's currently being displayed in the "Your Library" section through Hooks
        return release ? (
          <SwiperSlide tag="li" key={`slide-${release.id}`}>
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
          </SwiperSlide>
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
  }, [albumInfo]);

  //Individual albums/releases are displayed here
  return (
    <Suspense fallback={<ComponentLoading />}>
      {/* {albumCovers} */}

      <Swiper
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={1}
        slidesPerView={1}
      >
        {albumCovers}
        {/* <span slot="container-start">Container Start</span>
        <span slot="container-end">Container End</span>
        <span slot="wrapper-start">Wrapper Start</span>
        <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>
    </Suspense>
  );
}
export default Browse;
