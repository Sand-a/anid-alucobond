import React, { useEffect, useRef } from "react";
import "./SwiperCaroussel.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

const SwiperCaroussel = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      grabCursor: true,
      pagination: {
        clickable: true,
      },
      navigation: true,
      loop: true,
      breakpoints: {
        600: {
          navigator: false,
        },
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
           
            color: #fff;
          }
          .swiper-pagination-bullet-active{
          
            background-color: #fff;
          }
      `,
      ],
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);
  return (
    <>
      <swiper-container init="false" ref={swiperRef}>
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
