import { React, Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "./MusicShowcaseCarouselStyles.scss";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function MusicShowcaseCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }
  return (
    <Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        // navigation
        // pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        <Swiper
          id="thumbs"
          spaceBetween={5}
          slidesPerView={3}
          onSwiper={setThumbsSwiper}
        >
          {thumbs}
        </Swiper>
      </Swiper>
    </Fragment>
  );
}

export default MusicShowcaseCarousel;
