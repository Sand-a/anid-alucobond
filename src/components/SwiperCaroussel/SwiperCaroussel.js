import React, { useEffect, useRef } from "react";
import "./SwiperCaroussel.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Link } from "react-router-dom";
register();

const SwiperCaroussel = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    // Object with parameters
    const params = {
      slidesPerView: 1,
      grabCursor: true,
      pagination: { clickable: true },
      navigation: true,
      loop: true,
      injectStyles: [
        `
.swiper-button-next,
.swiper-button-prev {
 color: #fff;
top: var(--swiper-navigation-top-offset, 47%);
padding:1rem;
width:3rem ;
height: 3rem;
z-index:1;
        }
.swiper-button-next::before,
.swiper-button-prev::before {
position:absolute;
top:0;
left:0;
content: " ";
width:5rem;
height: 5rem;
z-index:-1;
opacity: 0.7;
background-color: rgb(0, 0, 0);
}

.swiper-button-next:hover::before,
.swiper-button-prev:hover::before {
opacity: 1;
}
.swiper-pagination-bullet{
width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,0.8rem));
height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,0.8rem));
opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
background:transparent;
border: 1.4px solid black;    
}
.swiper-pagination-bullet-active{
background: black;
}
.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
bottom: var(--swiper-pagination-bottom,0); 
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
    <div className="caroussel-container">
      <swiper-container ref={swiperRef} init="false">
        {images.map((img, i) => {
          return (
            <swiper-slide key={img}>
              <img src={img} alt={` Project Image ${i + 1}`} />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <Link to="/projects" className="closeBtn-link">
        <ion-icon className="closeBtn-icon" name="close-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default SwiperCaroussel;
