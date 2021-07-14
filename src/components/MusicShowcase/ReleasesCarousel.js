import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper.scss";
import "./ReleasesCarouselStyles.scss";
import ComponentLoading from "../Loading/ComponentLoading";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
function ReleasesCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [displayReleasesMobile, setDisplayReleasesMobile] = useState("");
  const [releaseInfo, setReleaseInfo] = useState(false);
  const token = localStorage.getItem("token");
  const baseURL =
    "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
  useEffect(() => {
    axios({
      method: "get",
      // url: `${testURL}/users`,
      url: `${baseURL}/releases`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });

    const handleSuccess = (res) => {
      console.log(res.data.releases);
      let releases = res.data.releases;
      // Main Function - looping through response, displaying response in Homepage Releases section & creating individual "ReleasePreview"s
      let displayAllReleasesMobile = releases.map((release) => {
        return release ? (
          <SwiperSlide key={"release-container" + release.id} tag="li">
            <img
              src={release.art_url}
              style={{ listStyle: "none" }}
              alt={`Slide ${release.id}`}
            />
          </SwiperSlide>
        ) : (
          <div className="loading-animation">
            <ComponentLoading />
          </div>
        );
      });
      //This Hook displays return/result of main function in "Releases"
      setDisplayReleasesMobile(displayAllReleasesMobile);
    };
    const handleFailure = (err) => {
      console.log(err);
    };
  }, [token]);

  // const slides2 = [];
  // for (let i = 9; i < 14; i += 1) {
  //   slides2.push();
  // }

  return (
    <div id="carousel-wrapper">
      {/* <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper> */}

      {/* <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper> */}

      <Swiper
        id="controller"
        onSwiper={setControlledSwiper}
        spaceBetween={1}
        slidesPerView={3}
        navigation
        pagination
      >
        {displayReleasesMobile}
      </Swiper>
    </div>
  );
}
export default ReleasesCarousel;
