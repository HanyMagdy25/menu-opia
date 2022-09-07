import React from "react";
import "./Carousel.css";
import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import cover4 from "../../assets/cover4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const imagesCarousel = [cover1, cover2, cover4];

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {imagesCarousel.map((car, index) => (
          <SwiperSlide>
            <div className="caro-div">
              <img src={car} alt="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
