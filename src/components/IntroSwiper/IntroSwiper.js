import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "./IntroSwiper.css";

const IntroSwiper = ({ projects }) => {
  return (
    <>
      <Swiper
        effect={"fade"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination, A11y]}
        className="mySwiper"
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.image}>
              <img src={project.image} alt="slide image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default IntroSwiper;
