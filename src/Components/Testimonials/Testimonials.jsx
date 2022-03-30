import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../images/avatar1.jpg";
import AVTR2 from "../../images/avatar2.jpg";
import AVTR3 from "../../images/avatar3.jpg";
import AVTR4 from "../../images/avatar4.jpg";

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Shivam Kumar Verma",
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil hic cupiditate debitis eumminus aliquam necessitatibus id officiis et ipsa placeat laborumquasi pariatur, eveniet corrupti dolore nulla? Saepe, corporis!',
  },
  {
    avatar: AVTR2,
    name: "Abhishek Chauhan",
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil hic cupiditate debitis eumminus aliquam necessitatibus id officiis et ipsa placeat laborumquasi pariatur, eveniet corrupti dolore nulla? Saepe, corporis!',
  },
  {
    avatar: AVTR3,
    name: "Sachin Narsingh Singh",
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil hic cupiditate debitis eumminus aliquam necessitatibus id officiis et ipsa placeat laborumquasi pariatur, eveniet corrupti dolore nulla? Saepe, corporis!',
  },
  {
    avatar: AVTR4,
    name: "Vikash Kumar Yadav",
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil hic cupiditate debitis eumminus aliquam necessitatibus id officiis et ipsa placeat laborumquasi pariatur, eveniet corrupti dolore nulla? Saepe, corporis!',
  },
];

function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
            {
              data.map(({avatar, name, review}, index) => {
                return (
                  <SwiperSlide key={index} className="testimonial">
                    <div className="client__avatar">
                      <img src={avatar}/>
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">{review}</small>
                  </SwiperSlide>
                );
              })
            }
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials;
