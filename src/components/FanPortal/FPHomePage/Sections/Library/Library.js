import { React, useEffect, useState, Suspense } from "react";
import axios from "axios";
import ComponentLoading from "../../../../Loading/ComponentLoading";
import AlbumCoverHover from "../AlbumCoverHover/AlbumCoverHover";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "./LibraryStyles.scss";
SwiperCore.use(Navigation, Pagination);

function Library(props) {
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
        //Set albumInfo Hook and displays each "album" information inside "Your Library"
        const showHoverInfo = (release) => {
          // setHoverInfo(
          //   <AlbumCoverHover
          //     closeButton={props.popUpPassed}
          //     setAlbumInfo={setAlbumInfo}
          //     albumInfo={albumInfo}
          //     release={release}
          //     toggle={closeAlbumInfo}
          //     showReleasePopUp={props.popUpPassed}
          //   />
          // );
        };

        //Return - what's currently being displayed in the "Your Library" section through Hooks
        return release ? (
          // <SwiperSlide tag="li" key={`slide-${release.id}`}>
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
          // </SwiperSlide>
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
      {albumCovers}

      {/* <Swiper
        tag="section"
        centeredSlides={true}
        wrapperTag="ul"
        loopAdditionalSlides={30}
        roundLengths={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            width: 480,
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            width: 640,
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        pagination
        spaceBetween={10}
        slidesPerView={1}
      >
        {albumCovers}
        <div class="swiper-button-next">Next</div>
        <div class="swiper-button-prev">Previous</div>
        <div class="swiper-pagination">SFSF</div>
      </Swiper> */}
    </Suspense>
  );
}
export default Library;
