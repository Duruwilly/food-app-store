import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Reviews } from "./Navmenu";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Button } from "./Button";
const ReviewSlider = () => {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={true}
    >
      {Reviews.map((review) => {
        const { src, name, id, note } = review;
        return (
          <SwiperSlide key={id}>
            <div className="review-slide">
             <div className="quote">
             <FaQuoteRight />
             </div>
             <div className="user">
              <img src={src} alt="" />
              <div className='user-info'>
               <h3>{name}</h3>
               <div className="stars">
                <BsFillStarFill className='star' />
                <BsFillStarFill className='star' />
                <BsFillStarFill className='star' />
                <BsFillStarFill className='star' />
                <BsStarHalf className='star' />
               </div>
              </div>
             </div>
             <p>{note}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewSlider;
