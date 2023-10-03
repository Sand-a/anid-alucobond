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
         
            width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,0.8rem));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,0.8rem));
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
            background:transparent;
            border: 1px solid #fff;
          
          
          }
          .swiper-pagination-bullet-active{
            background: #fff;

          }
          .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
            bottom: var(--swiper-pagination-bottom,5rem); 
        }
        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
          margin: 0 var(--swiper-pagination-bullet-horizontal-gap,5.5px);
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
