"use client"

import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'
import ProgressBar from './ProgressBar'
import ReviewCard from './ReviewCard'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Feedback = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewData = async () => {
      try {
        const response = await fetch('/reviews.json');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    reviewData();
  }, []);


  return (
    <div className="container my-16">

      {/* Section Heading */}
      <div className="lg:flex justify-between gap-10 ">
        <div className="space-y-5">
          <h4 className="text-3xl font-bold">Customer Review</h4>
          <div className="text-gray-500 space-y-5">
          <p>Our client`s satisfaction is at the heart of our work. Here`s what some of them have to say about their experience with our services. We take pride in delivering high-quality, user-friendly websites and exceptional online meeting experiences.</p>
          {/* <br /><br /> */}
          <p>These reviews reflect our commitment to excellence in both web design and video conferencing solutions.</p>
          </div>
        </div>
        {/* Star Based Review */}
        <div className="max-w-[600px] w-full">
          <p className="text-xl font-semibold">Based on {reviews.length} reviews</p>
          
          <div className='flex items-center gap-5 mt-2'>
            <span className='text-xl font-medium'>4/5</span>
            <div className='flex items-center gap-2'>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
            </div> 
          </div>

          <div className='mt-5'>
              <ProgressBar length={47} value={5} />
              <ProgressBar length={24} value={4} />
              <ProgressBar length={18} value={3} />
              <ProgressBar length={6} value={2} />
              <ProgressBar length={5} value={1} />
          </div>

        </div>
      </div>

      {/* Review Card */}
      <div className='py-10 '>
      <Swiper
				slidesPerView={1}
				spaceBetween={30}
				navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // clickable: true
        }}
				breakpoints={{
					1024: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				}}
				modules={[Navigation]}
          className="mySwiper"
        >
        {reviews.map((review, index) =><SwiperSlide key={index} className='py-10'> <ReviewCard review={review}/> </SwiperSlide>)}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <BsArrowLeftSquareFill />
          </div>
          <div className="swiper-button-next slider-arrow">
            <BsArrowRightSquareFill />
          </div>
        </div>
      </Swiper>
        
        
      </div>

    </div>
  )
}

export default Feedback