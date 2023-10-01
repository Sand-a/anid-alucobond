import React, { useEffect, useRef } from "react";
import "./SwiperCaroussel.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
register();

const SwiperCaroussel = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    // Object with parameters
    const params = {
      slidesPerView: 1,
      grabCursor: true,
      pagination: true,
      navigation: true,
      loop: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
          
            color: #fff;
          }
          .swiper-pagination-bullet{
            background-color: #fff;
          }
          .swiper-pagination-bullet-active{
            background-color: #fff;
          }
          @media screen and (max-width: 600px) {
            .swiper-button-next,
          .swiper-button-prev {
          display:none;
          }
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <>
      <swiper-container ref={swiperRef} init="false">
        {images.map((img) => {
          return (
            <swiper-slide key={img}>
              <img src={img} alt="slide image" />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
};

export default SwiperCaroussel;
