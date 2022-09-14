import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SpecialMeal } from "./Navmenu";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Button } from "./Button";
const SpecialDishSlider = () => {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={true}
    >
      {SpecialMeal.map((special, index) => {
        const { src, name, description, title } = special;
        return (
          <SwiperSlide key={index}>
            <div className="slide">
             <div className="content">
              <span>{title}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <Button title='order now' />
             </div>
             <div className="image">
              <img src={src} alt="" />
             </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SpecialDishSlider;