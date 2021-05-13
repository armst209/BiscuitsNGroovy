import { React, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "./LibrarySwiperStyles.scss";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function LibrarySwiper() {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [controlledSwiper, setControlledSwiper] = useState(null);
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  // const thumbs = [];
  // for (let i = 0; i < 5; i += 1) {
  //   thumbs.push(
  //     <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: "none" }}>
  //       <img
  //         src={`https://picsum.photos/id/${i}/163/100`}
  //         alt={`Thumbnail ${i}`}
  //       ></img>
  //     </SwiperSlide>
  //   );
  // }

  // const slides2 = [];
  // for (let i = 9; i < 14; i += 1) {
  //   slides2.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li">
  //       <img
  //         src={`https://picsum.photos/id/${i + 1}/500/300`}
  //         style={{ listStyle: "none" }}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>
  //   );
  // }
  return (
    <Fragment>
      <Swiper
        id="main"
        // thumbs={{ swiper: thumbsSwiper }}
        // controller={{ control: controlledSwiper }}
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
      </Swiper>

      {/* <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>

      <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides2}
      </Swiper> */}
    </Fragment>
  );
}

export default LibrarySwiper;
