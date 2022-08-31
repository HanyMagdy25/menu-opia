import React from 'react'
import "./Carousel.css";
import cover1 from "../../assets/cover.jpeg" 
import cover3 from "../../assets/cover3.jpg" 
import cover2 from "../../assets/cover2.png" 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='caro-div'><img src={cover1} alt="cover"/></div></SwiperSlide>
        <SwiperSlide><div className='caro-div'><img src={cover2} alt="cover"/></div></SwiperSlide>
        <SwiperSlide><div className='caro-div'><img src={cover3} alt="cover"/></div></SwiperSlide>
      </Swiper>
    </>
  )
}
