import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Img1 from "../../assets/images/special-offer.jpg";
import Img3 from "../../assets/images/fashion-shoes.jpg";
import Img4 from "../../assets/images/red-shoes.jpg";
import Img5 from "../../assets/images/fashion-shirt.jpg";
import Img6 from "../../assets/images/black-shirt.jpg";
import "./slider.css";

export const Slider = () => {
  return (
    <>
      <div className="margin-gap">
        <Swiper
          spaceBetween={30}
          centeredSlides
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
