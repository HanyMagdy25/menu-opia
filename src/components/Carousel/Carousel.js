import React from "react";
import "./Carousel.css";
import cover1 from "../../assets/cover1.jpg";
import cover3 from "../../assets/cover3.jpg";
import cover2 from "../../assets/cover2.jpg";
import cover4 from "../../assets/cover4.jpg";
import cover5 from "../../assets/cover5.jpg";
import cover6 from "../../assets/cover6.jpg";
import cover7 from "../../assets/cover7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const imagesCarousel = [cover1, cover2, cover3, cover4, cover5, cover6, cover7];

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
