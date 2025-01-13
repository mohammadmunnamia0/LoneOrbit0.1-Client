import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";


import bg1 from '../images/carousel1.jpg'
import bg2 from '../images/carousel2.jpg'
import bg3 from '../images/carousel3.jpg'

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto ">
      <Swiper
       centeredSlides= {true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <Slide image={bg1} text='Get Your Web Development Projects Done in minutes'></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bg2} text='Get Your Graphics Design Projects Done in minutes'></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bg3} text='Start Your Digital Marketing Campaigns up n running'></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
