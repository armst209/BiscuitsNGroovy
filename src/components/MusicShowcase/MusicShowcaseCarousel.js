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
  return <Fragment></Fragment>;
}

export default MusicShowcaseCarousel;
