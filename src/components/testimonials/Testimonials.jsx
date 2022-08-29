import React from 'react'
import "./testimonials.css"
import Avtr1 from "../.././assets/avatar1.jpg"
import Avtr2 from "../.././assets/avatar2.jpg"
import Avtr3 from "../.././assets/avatar3.jpg"
import Avtr4 from "../.././assets/avatar4.jpg"


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr1} alt="" />
          </div>
          <h5 className="client__name">Tina Show</h5>
          <small className="client__review">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptas provident veniam doloremque impedit repudiandae! Aliquid cupiditate deleniti labore natus minima iusto blanditiis aspernatur sunt dolore magni. Deleniti, ducimus deserunt. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr2} alt="" />
          </div>
          <h5 className="client__name">Shatta Wale</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptas provident veniam doloremque impedit repudiandae! Aliquid cupiditate deleniti labore natus minima iusto blanditiis aspernatur sunt dolore magni. Deleniti, ducimus deserunt. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr3} alt="" />
          </div>
          <h5 className="client__name">Kwame Despite</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptas provident veniam doloremque impedit repudiandae! Aliquid cupiditate deleniti labore natus minima iusto blanditiis aspernatur sunt dolore magni. Deleniti, ducimus deserunt. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avtr4} alt="" />
          </div>
          <h5 className="client__name">Nana Ama McBrown</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptas provident veniam doloremque impedit repudiandae! Aliquid cupiditate deleniti labore natus minima iusto blanditiis aspernatur sunt dolore magni. Deleniti, ducimus deserunt. 
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials